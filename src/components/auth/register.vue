<template>
  <div class="container__form">
    <h2 class="text-2xl font-semibold text-darkBlue">Regístrate</h2>
    <Loading />
    <form  class="form" @submit.prevent="handleRegister">
      <div class="block__form">
          <label for="username">Usuario</label>          
          <input  required id="username" v-model="username" type="text" placeholder="Nombre de Usuario" />
      </div>
      <div class="block__form">
          <label for="email">Correo electrónico</label>          
          <input required id="email"  v-model="email" type="email" placeholder="electrónico" />
      </div>
      <div class="block__form">
          <label for="password">Contraseña</label>          
          <input required id="password" v-model="password" type="password" placeholder="Contraseña" />
      </div>
      <div class="block__form">
          <label for="confirmPassword">Confirma contraseña</label>          
          <input required id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Confirma Contraseña" />
      </div>
      <slot name="contenido"/>
      <button class="btn--pill" type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
import { register as registerUser } from '../../services/auth'; 
import { login } from '../../services/auth';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.$emit('register-error', 'Las contraseñas no coinciden.');
        return
      }
      this.showLoading();
      try {
        const user = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
        // Llamar a la función de registro del servicio de autenticación
        const response = await registerUser(user); // Usa el nuevo nombre aquí
        await login(this.username, this.password)
        this.hideLoading();
        this.$emit('register-success');

        console.log("success");
        // Puedes redirigir al usuario a la página de inicio de sesión u otras acciones después del registro exitoso
      } catch (error) {
        this.hideLoading();
        this.$emit('register-error', error.response.data.message);
        // Mostrar un mensaje de error al usuario u otras acciones de manejo de errores
      }
    },
    ...mapActions(['showLoading', 'hideLoading']),
  },
};
</script>
