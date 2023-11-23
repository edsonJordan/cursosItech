<template>
    <Carousel v-bind="carouselSettings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="2000">
                        <Slide v-for="slide in slides" :key="slide">
                        <div class="carousel__item">
                            <img :src="slide" alt="">
                        </div>
                        </Slide>

                        <template #addons>
                        <Navigation />
                        </template>
  </Carousel>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

// Importa tus imágenes aquí
import bannerImage from '@/assets/images/banner__index.webp';
import cursosGrabados from '@/assets/images/cursos-grabados-principal.webp';
import turnitin from '@/assets/images/Turnitin.webp';
import sitesWeb from '@/assets/images/web-sites.webp';

// Carrouses Instutions

import Colegioprofesores3 from '@/assets/images/institutions/Colegio-profesores3.webp';
import Corlad3 from '@/assets/images/institutions/Corlad3.webp';
import DREA3 from '@/assets/images/institutions/DREA3.webp';
import proInnovate from '@/assets/images/institutions/Proinnovate3.webp';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    bannerImage,
    cursosGrabados,
    turnitin,
    sitesWeb
    ,
    // Define las imágenes que quieras mostrar en el carrusel
    slides: [Colegioprofesores3, Corlad3, DREA3, proInnovate],
    // Configuración del carrusel
    carouselSettings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // Define los puntos de quiebre (breakpoints) para diferentes tamaños de pantalla
    breakpoints: {
      // 700px y más
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024px y más
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
};
</script>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  @apply text-white px-6
}
</style>