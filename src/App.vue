<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/common/Navigation.vue';
import Footer from './components/common/Footer.vue';

import { isDataExpired } from '@/credentials/data';

import { isTokenExpired } from '@/credentials/tokken';
// 
import { getAll as getAllCursos } from '@/services/cursos';
import { getAll as getAllCategorias }   from '@/services/categories';


</script>

<template>
  <body>
    <Navigation/>
      <main>
      <RouterView />
    </main>
    <Footer/>
  </body>
  
</template>


<script>
export default {
  async created() {
    const tokken = isTokenExpired();
    if (tokken.exists) {
      if(tokken.isExpired){
        localStorage.removeItem('jwtToken');
        return this.$store.commit('SET_IS_LOGIN', false);
      }
      this.$store.commit('SET_IS_LOGIN', true);
    }



    const dataItech= isDataExpired();   
    if(dataItech.exists){
      if(dataItech.isExpired){  
        const  originalCursos = await getAllCursos();
        const categorias = await  getAllCategorias();
        const cursos = originalCursos.map((item) => {
          const {
            id,
            featured_image,
            curso_checkbox_dias,
            curso_start_time,
            curso_end_time,
            formulario_curso,
            curso_fecha_inicio,
            categoriaCurso,
            whatsapp_link,
            google_meet_link,
            title
          } = item;

          return {
            id,
            featured_image,
            title,
            curso_checkbox_dias,
            curso_start_time,
            curso_end_time,
            formulario_curso,
            curso_fecha_inicio,
            categoriaCurso,
            whatsapp_link,
            google_meet_link
          };
        });
        const oneDay = 24 * 60 * 60;
        const expirationTimestamp = Math.floor(Date.now() / 1000) + oneDay;
        // Guardar los datos en el localStorage con isnull: false
        localStorage.setItem('itechData', JSON.stringify(
          { exists: true, 
            data: {
              cursos:cursos,
              categorias:categorias
            }, 
            expiration:expirationTimestamp 
          }
          ));
      }
      this.$store.commit('SET_IS_DATA', true);
    }else{
        const  originalCursos = await getAllCursos();
        const categorias = await  getAllCategorias();
        const cursos = originalCursos.map((item) => {
          const {
            id,
            featured_image,
            curso_checkbox_dias,
            curso_start_time,
            curso_end_time,
            formulario_curso,
            curso_fecha_inicio,
            categoriaCurso,
            whatsapp_link,
            title,
            google_meet_link
          } = item;

          return {
            id,
            featured_image,
            title,
            curso_checkbox_dias,
            curso_start_time,
            curso_end_time,
            formulario_curso,
            curso_fecha_inicio,
            categoriaCurso,
            whatsapp_link,
            google_meet_link
          };
        });
        const oneDay = 24 * 60 * 60;
        const expirationTimestamp = Math.floor(Date.now() / 1000) + oneDay;
        // Guardar los datos en el localStorage con isnull: false
        localStorage.setItem('itechData', JSON.stringify(
          { exists: true, 
            data: {
              cursos:cursos,
              categorias:categorias
            }, 
            expiration:expirationTimestamp 
          }
          ));
        this.$store.commit('SET_IS_DATA', true);
    }
   
  
  

  },
};
</script>