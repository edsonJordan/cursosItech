<template>
  <Carousel v-bind="carouselSettings" :breakpoints="breakpoints">
    <Slide v-for="(item, index) in carouselItems" :key="index">
      <div class=" card-testimonial  ">
        <div class="card__header">
          <h2 class="text-white" >{{ item.title }}</h2>
          <p>{{ item.description }}</p>

        </div>
        <div class="card__body">
          <span>{{ item.comment }}</span>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselTestimonies',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // Define los datos del carrusel en un objeto
    carouselItems: [
      {
        title: 'Liliana',
        description: 'Lima - Perú',
        comment:'Es una muy buena Escuela de informatica recomendable   por todo lo alto muy buena profesora y asistenta, muy buena explicacion bien didactico gracias por esta oportuidad de aprender  a distancia gracias.',
        image: '@/assets/images/image1.webp',
        alt: 'Imagen 1',
      },
      {
        title: 'Francisco Figueira',
        description: 'Caracas Venezuela',
        comment:'Los cursos son completos, los profesores son profesionales y excelentes capacitadores, la metodología y logística de Itec muy bien organizada, los canales utilizados en las redes como Youtube aportan  a la comunidad cantidades de videos de temas diversos temas relacionados en excelente calidad y muy bien explicados. Recomiendo a Itec al 100%.',
        image: '@/assets/images/image2.webp',
        alt: 'Imagen 2',
      },
      {
        title: 'Sergio Calle',
        description: 'Piura - Perú',
        comment:'La enseñanza en ITEC123 me ha parecido muy interesante y muy dinámica; interesante por cada curso que he llevado y por la capacidad que tuvo cada docente al absolver cada duda que le planteábamos en cada clase, y muy dinámica porque con cada reto y ejercicio que nos dejaban íbamos aprendiendo mucho más sobre el curso.',
        image: '@/assets/images/image3.webp',
        alt: 'Imagen 3',
      },
      {
        title: 'Hugo Elías',
        description: 'Lima - Perú',
        comment:'Mis estudios académicos en ITEC123 iniciaron en abril del 2022 y no me arrepiento de haber tomado esa decisión. Todos los cursos son muy recomendables combinan en armonía con enseñanza Teórica, Práctica y sobre todo son dinámicas e interactivas. Cuentan con una excelente plana Docente de larga data, lo cual en mi opinión los pone por encima de cualquier institución educativa que hay actualmente en el mercado.',
        image: '@/assets/images/image3.webp',
        alt: 'Imagen 3',
      },
      {
        title: 'Gladys Vegas',
        description: 'Tumbes - Perú',
        comment:'Agradecerles  por  tan valiosos aportes, los que me serán sumamente útiles para el desempeño de mi labor. Valoro su vocación de servicio puesta de manifiesto  y comprobada en cada una de las clases desarrolladas con  una metodología  pertinente para ayudar a los participantes a construir conocimiento.',
        image: '@/assets/images/image3.webp',
        alt: 'Imagen 3',
      },
      {
        title: 'Liliana Diorio',
        description: 'Lima - Perú',
        comment:'Es una muy buena Escuela de informatica recomendable   por todo lo alto muy buena profesora y asistenta, muy buena explicacion bien didactico gracias por esta oportuidad de aprender  a distancia gracias.					',
        image: '@/assets/images/image3.webp',
        alt: 'Imagen 3',
      },
      // Agrega más objetos según sea necesario
    ],
    // Configuración del carrusel
    carouselSettings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    breakpoints: {
       // 700px y más
       
       325: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024px y más
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
});
</script>