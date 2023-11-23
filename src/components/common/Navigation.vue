<script>
import { RouterLink } from 'vue-router'
import { mapState  } from 'vuex';
import Register from '@/components/auth/register.vue';
import Login from '@/components/auth/login.vue';
import Logout from '@/components/auth/logout.vue';
import LOGOTIPO from '@/assets/images/LOGOTIPO.webp';

//Modals
import Modal from '@/components/modals/Modal.vue'; 

export default {
  components: {
    Logout,Register,   Login , Modal
  },
  
  data() {
    return {
        LOGOTIPO, 
        mostrarLoginModal: false,
        mostrarRegistroModal: false,
        error: null,
    };
  },
  computed: {
    ...mapState(['isLogin']),
    isAuthenticated() {
            return this.isLogin; 
        },

   
  },
  methods: {
    toggleMobileMenu() {
    const mobileMenu = document.getElementById('menu__mobile');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        } else {
        mobileMenu.classList.add('active');
        }
    },
    userDisplayName() {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken) {
        const tokenData = JSON.parse(jwtToken);
        return tokenData.user_display_name;
      } else {
        return 'Nombre'; // O algún valor por defecto si el token no está presente
      }
    },
    mostrarModal() {
      this.mostrarModalFlag = true; // Mostrar el modal cuando se hace clic en el botón
    },
    cerrarModal() {
      this.mostrarLoginModal = false;
      this.mostrarRegistroModal = false;
      this.error = null;
    },
    cerrarLoginModal() {
      this.mostrarLoginModal = false; // Cierra el modal de inicio de sesión
      this.error = null;
    },
    cerrarRegisterModal() {
      this.mostrarRegistroModal = false; // Cierra el modal de inicio de sesión
      this.error = null;
    },
    mostrarError(errorMessage) {
      this.error = errorMessage; // Almacenar el mensaje de error
    },
  },
};
</script>
     
      
<template>
     <nav class="navigation " >
        <div class="content__navigation">
            <div class="icon__menu">
                <a id="icon__menu" href="#" @click="toggleMobileMenu">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" >
                        <g>
                            <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
                            <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
                            <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
                        </g>
                    </svg>
                </a>
            </div>
            <div id="menu__mobile" class="navigation__mobile ">
                <div class="menu__mobile">
                    <a class="logo__nav" href="#">
                        <img  :src="LOGOTIPO" alt="">
                    </a>
                    <div id="menu__close" class="menu__close" @click="toggleMobileMenu">                        
                        <font-awesome-icon class="text-white self-center flex" :icon="['fas', 'x']" size="xl" />
                    </div>
                </div>
                <ul class="navigation__list">
                    <li>
                        <RouterLink
                            :class="{ active: $route.name === 'home' }" 
                            to="/"
                            @click="toggleMobileMenu"
                            >
                            <i class="_mi _before bb-icon-l buddyboss bb-icon-home" aria-hidden="true"></i>
                            Inicio
                        </RouterLink>                       
                    </li>
                    <li>
                        <RouterLink
                            :class="{ active: $route.name === 'cursosGratuito' }"
                            to="/cursos-gratuitos"
                            @click="toggleMobileMenu"
                            >
                            <i class="_mi _before bb-icon-l buddyboss bb-icon-course" aria-hidden="true"></i>
                            Cursos                            
                        </RouterLink>                        
                        <ul>
                            <li>
                                Curso Gratuitos en vivo 
                            </li>
                        </ul>
                    </li>
                    <li v-if="isAuthenticated">
                        {{ userDisplayName() }}                 
                    </li>
                    <li>
                        <Logout v-if="isAuthenticated"  @click="toggleMobileMenu">
                            <font-awesome-icon  :icon="['fas', 'power-off']" size="xl" />
                        </Logout>
                        
                         
                    </li>
                    <li>
                        <a v-if="!isAuthenticated" class="text-white self-center font-semibold hover:text-blueTestimonial" href="#" @click="mostrarLoginModal = true;  toggleMobileMenu()" >Iniciar Sesión</a>
                    </li>
                    <li>
                        <a v-if="!isAuthenticated" class="btn btn--pill" href="#" @click="mostrarRegistroModal = true;  toggleMobileMenu()">Registrarse</a>
                    </li>
                </ul>
            </div>
            <a class="logo__nav" href="#">
                <img  :src="LOGOTIPO" alt="">
            </a>
            <div id="menu__desktop" class="navigation__desktop ">
                <ul class="navigation__list">
                    <li>
                        
                        <RouterLink
                            :class="{ active: $route.name === 'home' }" 
                            to="/"
                            >
                            <i class="_mi _before bb-icon-l buddyboss bb-icon-home" aria-hidden="true"></i>
                            Inicio
                        </RouterLink>
                    </li>
                   

                    <li>
                        <RouterLink
                            :class="{ active: $route.name === 'cursosGratuito' }"
                            to="/cursos-gratuitos"
                            >
                            <i class="_mi _before bb-icon-l buddyboss bb-icon-course" aria-hidden="true"></i>
                            Cursos
                        </RouterLink>
                        <ul>
                            <li>
                                <RouterLink to="/cursos-gratuitos">
                                    Curso Gratuitos en vivo 
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="options__cta">
                <a class="icon__user" href="">
                    <i class="bb-icon-l bb-icon-user"></i>
                </a>
                <p class="text-white"  v-if="isAuthenticated">
                    {{ userDisplayName() }}                 
                </p>
                <Logout v-if="isAuthenticated" />
                <a v-if="!isAuthenticated" class="text-white self-center font-semibold hover:text-blueTestimonial" href="#" @click="mostrarLoginModal = true">Iniciar Sesión</a>
                <a v-if="!isAuthenticated" class="btn btn--pill" href="#" @click="mostrarRegistroModal = true">Registrarse</a>
                <!-- Modal de registro -->
                <Modal :mostrar="mostrarRegistroModal" @cerrar-modal="cerrarModal">
                    <Register @register-success="cerrarRegisterModal" @register-error="mostrarError" >
                        <template v-slot:contenido>
                            <div v-if="error" class="error-message max-w-xs pt-2" v-html="error"></div>
                        </template>
                    </Register>
                </Modal>

                <Modal :mostrar="mostrarLoginModal" @cerrar-modal="cerrarModal">
                    <Login @login-success="cerrarLoginModal" @login-error="mostrarError">
                        <!-- <div v-if="error" class="error-message max-w-xs pt-2" v-html="error"></div> -->
                        <template v-slot:contenido>
                            <div v-if="error" class="error-message max-w-xs pt-2" v-html="error"></div>
                        </template>
                    </Login>
                </Modal>

            </div>
            
        </div>
    </nav>
</template>