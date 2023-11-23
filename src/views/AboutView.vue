<template>
  <div class="about">
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

    
  <p>Estado de inicio de sesión global: {{ isLogin }}</p>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isLogin']),
  },
};
</script>
