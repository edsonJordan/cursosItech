
<script>
    import { mapState } from 'vuex';
    import { getAll as getAllCategorias }   from '../services/categories';
    import { getAll as getAllCursos } from '../services/cursos';
    import { create as createInscripcion } from '../services/inscripciones';
    import Login from '@/components/auth/login.vue';
    import Modal from '@/components/modals/Modal.vue'; 
    import { useToast } from 'vue-toastification';
    import { isTokenExpired } from '@/credentials/tokken';
    import { mapActions, mapGetters  } from 'vuex';



    import world from '@/assets/images/icons/all.png';
    import worldActive from '@/assets/images/icons/all-bold.png';

    import { isDataExpired } from '@/credentials/data';


  export default {
    components:{
        Login , Modal
    },
    
    computed: {
        ...mapState(['isLogin']),
        ...mapGetters(['isData']),
        isAuthenticated() {
            return this.isLogin; // Comprobar si el usuario está autenticado
        },
    },
    data(){
        return{
            world,
            worldActive,
            categories:[],
            originalCursos: [],
            cursos:[],
            searchCursos:[],
            searchText: "",
            mostrarLoginModal: false,
            mostrarModalMensaje:false,
            error: null,
            errorMensaje: null,
            successMessage: null, 
            isInputFocused: false,
            activeCategory: null,
            linkWhastapp:null,
            linkMeet:null
        }
    },
    mounted() {    
    this.getData();
    // this.getCategories();
    // this.getCursos();
    // this.createInscripcion();
    },
    watch: {
        isData(newValue) {
        // Este método se ejecutará cuando isData cambie
            if (newValue === true) {
                const dataItech= JSON.parse(localStorage.getItem('itechData'));
                let cursos = dataItech.data.cursos;
                this.originalCursos = cursos;
                this.cursos = this.originalCursos.slice();

                this.categories = dataItech.data.categorias;

            }
        },
    },
    methods:{
        checkEscapeKey(event) {
            if (event.key === "Escape") {
                // La tecla Escape fue presionada
                this.inputBlurHandler();
                this.searchText = '';
                this.isInputFocused = false;
            }
        },
        formatTimeRange(startTime, endTime) {
            const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            };

            const formatTime = (timeString) => {
            const [hours, minutes] = timeString.split(':');
            const time = new Date(0, 0, 0, hours, minutes);
            return time.toLocaleTimeString('en-US', options);
            };

            const formattedStartTime = formatTime(startTime);
            const formattedEndTime = formatTime(endTime);

            return `${formattedStartTime} a ${formattedEndTime}`;
        },
        formatDateToSpanish(dateString) {
            const options = {
            weekday: 'long',
            // year: 'numeric',
            month: 'long',
            day: 'numeric',
            };

            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', options);
        },
        showToast() {
            const toast = useToast();
            toast.success('¡Inscripción Exitosa!', {
                    toastClassName: "toast__danger",
                    position: "bottom-left",
                    timeout: 4000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            // También puedes usar toast.error, toast.info, toast.warning según tus necesidades
        },
        clearSearch() {
            this.inputBlurHandler(); // Quita el enfoque del campo de entrada
            this.searchText = ''; // Borra el texto del campo de búsqueda
            this.searchCursos = this.originalCursos.slice();
        },
        inputFocusHandler() {
            this.isInputFocused = true;
            this.searchCursos = this.originalCursos.slice();
        },
        inputBlurHandler() {
            this.isInputFocused = false;
            this.searchText = ''; // Borra el texto del campo de búsqueda
            this.searchCursos = this.originalCursos.slice();
            
        },
        mostrarTodos() {
            this.cursos = this.originalCursos.slice();
        },
        searchCourses() {
            if (this.searchText.trim() === "") {
      // Si el campo de búsqueda está vacío, mostrar todos los cursos originales
            this.searchCursos = this.originalCursos.slice();
            } else {
            // Filtrar los cursos basados en el atributo "title"
            this.searchCursos = this.originalCursos.filter((curso) => {
                return curso.title.rendered.toLowerCase().includes(this.searchText.toLowerCase());
            });
            // console.log(this.searchCursos);
            }
        },
        filtrarCursos(categoriaId) {   
            this.activeCategory = categoriaId;
            if (categoriaId === -1) {
                this.mostrarTodos();
            } else {
                this.cursos = this.originalCursos
                .slice()
                .filter((curso) => curso.categoriaCurso.includes(categoriaId));
            }
        },
        mostrarModal() {
            this.mostrarModalFlag = true; // Mostrar el modal cuando se hace clic en el botón
        },
        cerrarModal() {
            this.mostrarLoginModal = false;
            this.error = null;
        },
        cerrarLoginModal() {
            this.mostrarLoginModal = false; // Cierra el modal de inicio de sesión
            this.error = null;
        },
        cerrarModalMensaje() {
            this.mostrarModalMensaje = false; // Cierra el modal de inicio de sesión
            this.errorMensaje = null;
            this.successMessage= null;
            this.linkMeet=null;
            this.linkWhastapp=null;
        },
        mostrarError(errorMessage) {
            this.error = errorMessage; // Almacenar el mensaje de error
        },
        async registrarCurso(formId, fechaInicio, postId, linkWhastapp,linkMeet) {
            // e.preve
            if (!this.isLogin) {
                this.mostrarLoginModal = true
                return
            }            
            this.showLoading();
            const tokken = isTokenExpired();
            // console.log(tokken);
            if(tokken.isExpired){
                localStorage.removeItem('jwtToken');
                this.$store.commit('SET_IS_LOGIN', false);
                this.hideLoading();
                this.mostrarModalMensaje = true
                this.errorMensaje= "¡Tiempo de sesión agotado!";
                return 
            }
                try {
                let fechaConHora = fechaInicio + ' 00:00:00';
                    // console.log( tokken.credential.id);
                // return 
                    const data = {
                        form_id: parseInt(formId),
                        created_at:fechaConHora,
                        id_user:tokken.credential.id,
                        id_post: postId,
                        data: {
                            email:tokken.credential.user_email,       
                            subject : "Inscripción de curso",
                            message: "Inscripción del curso desde la app web"
                        },
                    };
                    const response = await createInscripcion(tokken.credential.token, data);              
                    this.mostrarModalMensaje = true
                    this.successMessage = response.data.result.message;
                    this.linkMeet=linkMeet
                    this.linkWhastapp=linkWhastapp    
                } catch (error) {
                    this.mostrarModalMensaje = true
                    this.errorMensaje= error.response.data.message;
                    this.linkMeet=linkMeet
                    this.linkWhastapp=linkWhastapp
                }
                this.hideLoading();
            // console.log("Inscrito en evento");
        },      
        getData(){
            const dataItech = isDataExpired();
            if(dataItech.exists){
                const dataItech= JSON.parse(localStorage.getItem('itechData'));
                let cursos = dataItech.data.cursos;
                let categorias = dataItech.data.categorias;
                this.originalCursos = cursos;
                this.cursos = this.originalCursos.slice();
                this.categories = categorias;

            }
            // const dataItech= JSON.parse(localStorage.getItem('itechData'));
            // let cursos = dataItech.data;
            // this.originalCursos = cursos;
            // this.cursos = this.originalCursos.slice();
        },
        formatDiasSemana(dias) {
            const length = dias.length;
            if (length === 0) return "";
            if (length === 1) return dias[0];
            if (length === 2) return `${dias[0]} y ${dias[1]}`;
            const lastDay = dias[length - 1];
            const otherDays = dias.slice(0, length - 1).join(", ");            
            return `${otherDays} y ${lastDay}`;
        },
        ...mapActions(['showLoading', 'hideLoading']),   
    },
  };
  </script>
  
<template>
      <Loading />
        <section class="section section__search-course"  >
            <div class="content content__search-course" >               
                <div class="contenido__search-course ">
                    <div action="" class="formSearch" :class="{ active: isInputFocused  }">
                        <div class="inpute__search">
                            <font-awesome-icon class="p-2 font-bold text-xl" icon="magnifying-glass" />
                            <input v-model="searchText" placeholder="¿Qué quieres aprender hoy?" @input="searchCourses"  @focus="inputFocusHandler" class="input__text" type="text" name="" id="">
                            <!--  @blue="inputBlurHandler" @keydown="checkEscapeKey" -->
                            <font-awesome-icon v-if="this.isInputFocused" @click="inputBlurHandler" class="p-2 cursor-pointer font-bold text-xl" :icon="['far', 'circle-xmark']" />
                        </div>
                        <div class="items__search">
                            <div class="course__item-search" v-for="item in searchCursos" :key="item.id">
                                <div class="search__course">
                                    <h3>{{ item.title.rendered }}</h3>
                                    <!-- Resto de la información del curso -->
                                    <button class="btn btn--pill text-white" @click="registrarCurso(item.formulario_curso, item.curso_fecha_inicio, item.id, item.whatsapp_link, item.google_meet_link)">Inscribirme</button>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class="list__categories">                    
                    <a
                    class="category__item cursor-pointer"
                    @click="filtrarCursos(-1)"
                    :class="{ active: activeCategory === -1 }"
                    >
                        <div class="category__image ">
                            <div class="img">
                                <img class="icon default" :src="world" alt="">
                                <img class="icon active" :src="world" alt="">
                               
                            </div>
                        </div>
                        <p>Todos</p>
                    </a>
                    <a class="category__item cursor-pointer" v-for="item in categories" :key="item.id" :class="{ active: activeCategory === item.id }"  @click="filtrarCursos(item.id)">
                        <div class="category__image">
                            <div class="img">
                                <img class="icon default" :src=item.meta.imagen_categoria alt="">
                                <img class="icon active" :src=item.meta.imagen_active alt="">
                            </div>
                        </div>
                        <p>{{ item.name }}</p>
                    </a>
                </div>
                <div class="list__courses">                    
                    <div class="course__item" v-for="item in cursos" :key="item.id"> 
                        <img class="image__course" :src="item.featured_image" alt="">                       
                        <div class="course__content">
                            <h3>
                                {{ item.title.rendered }}
                            </h3>
                            <ul class="course__talk">
                                <li><strong>Inicio</strong>: {{ formatDateToSpanish(item.curso_fecha_inicio) }}</li>
                                <li><strong>Duración</strong>: 2 semanas  </li>
                                <li v-if="item.curso_checkbox_dias && Array.isArray(item.curso_checkbox_dias) && item.curso_checkbox_dias.length > 0">
                                    <strong>Días</strong>: {{ formatDiasSemana(item.curso_checkbox_dias) }}
                                </li>
                                <li v-if="item.curso_start_time && item.curso_end_time">
                                    <strong>Horario</strong>: {{ formatTimeRange(item.curso_start_time, item.curso_end_time) }}  (Lima - Perú)</li>
                                <li>Certificado con QR (opcional) </li>
                            </ul>
                            <div class="course__actions">
                                <button class="btn btn--pill" @click="registrarCurso(item.formulario_curso, item.curso_fecha_inicio, item.id, item.whatsapp_link , item.google_meet_link)" href="#">Inscribirme</button>
                                <!-- <a class="btn btn--pill danger" href="#">Clases en vivo</a> -->                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Modal :mostrar="mostrarLoginModal" @cerrar-modal="cerrarModal">
                    <Login @login-success="cerrarLoginModal" @login-error="mostrarError">
                        <template v-slot:contenido>
                            <div v-if="error" class="error-message max-w-xs pt-2" v-html="error"></div>
                        </template>
                    </Login>
        </Modal>
        <Modal :mostrar="mostrarModalMensaje" @cerrar-modal="cerrarModalMensaje"> 
           
            
            <div v-if="errorMensaje" class="error-message max-w-xs pt-2" :class="{ 'text-red-600 font-bold text-2xl text-center': errorMensaje }" v-html="errorMensaje"></div>
            <div v-if="successMessage" class="success-message max-w-xs pt-2" :class="{ 'text-green-500 font-bold text-2xl text-center': successMessage }" v-html="successMessage"></div>
            <br>

            <p>Ingresa en:  </p>
            
            <br>
            <div class="flex flex-col gap-4">
                <div v-if="linkWhastapp" class="w-full flex justify-center items-center ">
                <a :href="linkWhastapp" target="_blank" class="bg-green-500 text-white py-2 px-6 rounded-md"> Grupo de WhatsApp</a>
                </div>
                <div v-if="linkMeet" class="w-full flex justify-center items-center ">
                    <a :href="linkMeet" target="_blank" class="bg-red-700 text-white  py-2 px-6 rounded-md">Clase en vivo</a>
                </div>
            </div>
            
        </Modal>
  </template>

  