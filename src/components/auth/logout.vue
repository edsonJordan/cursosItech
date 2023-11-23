<!-- Logout.vue -->
<template>
    <div class="cursor-pointer" >
      <font-awesome-icon @click="logout" class="text-white font-semibold"  :icon="['fas', 'power-off']" size="xl" />
      <!-- <button >Cerrar Sesión</button> -->
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Eliminar el token de localStorage
        localStorage.removeItem('jwtToken');
        this.$store.commit('SET_IS_LOGIN', false);
        // Realizar otras acciones de cierre de sesión si es necesario
      },
    },
  };
  </script>