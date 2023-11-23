<template>
  <div>
    <header>
      <!-- Barra de navegación u otras partes comunes -->
    </header>

    <main>
      <!-- Mostrar componente Login si el usuario no está autenticado -->
      <Login v-if="!isAuthenticated" />
      <Register v-if="!isAuthenticated" />
      <!-- Mostrar componente Logout si el usuario está autenticado -->
      <Logout v-if="isAuthenticated" />
    </main>
    <!-- <GoogleLogin :callback="login"/> -->
    <footer></footer>

  </div>
</template>

<script >
import { mapState  } from 'vuex';
import Logout from '../components/auth/logout.vue';
import Login from '../components/auth/login.vue';
import Register from '../components/auth/register.vue';
// import { googleAuthCodeLogin } from "vue3-google-login"

// import { googleTokenLogin } from "vue3-google-login"
export default {
  components: { Logout, Logout, Login, Register },
    computed: {
        ...mapState(['isLogin']),
        isAuthenticated() {
            return this.isLogin; // Comprobar si el usuario está autenticado
        },
    },
   
   /*  setup() {
    const login = () => {
      googleAuthCodeLogin().then((response) => {
        console.log("Handle the response", response)
      })
    };
  
    return {
      login
    }
} */
}
</script>