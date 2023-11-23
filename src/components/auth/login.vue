<!-- components/Login.vue -->
<template>
    <div class="container__form">
      <h2 class="text-2xl font-semibold text-darkBlue" >Iniciar Sesión</h2>
      <Loading />
      <form class="form" @submit.prevent="handleLogin">
        <div class="block__form">
          <label for="username">Usuario</label>
          <input required id="username" v-model="username" placeholder="Nombre de usuario" />
        </div>
        <div class="block__form">
          <label for="password">Contraseña</label>
          <input required id="password"  type="password" v-model="password" placeholder="Password" />
         
        </div>    
        <slot name="contenido"/>
        <button class=" btn--pill" type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { login } from '../../services/auth';
  import { mapActions } from 'vuex';


  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      
      async handleLogin() {
        this.showLoading();
        try {
          await login(this.username, this.password);
          // console.log('Login successful! Token:', token);
          this.$emit('login-success'); // Emitir evento personalizado
          this.hideLoading();
          // Redirigir al usuario o realizar otras acciones después del inicio de sesión
        } catch (error) {
          this.hideLoading();
          this.$emit('login-error', error.response.data.message); 
          // console.error('Login failed:', error);
          // Mostrar un mensaje de error al usuario u otras acciones de manejo de errores
        }
      },
      ...mapActions(['showLoading', 'hideLoading']),
    },
  };
  </script>