<template>
  <div class="" >
    <div class=" w-full fixed h-full left-0 top-0 z-40" v-if="mostrar" >
      <div class="modal-overlay bg-darkBlue opacity-40" @click="cerrarModal">

      </div> 
      <div class="modal max-w-2xl z-50 flex flex-col"  >
          <button  class="modal-close-button self-end" @click="cerrarModal"> 
            <font-awesome-icon class="text-gray-700  cursor-pointer p-2 font-bold text-xl" :icon="['fas', 'x']"  @click="clearSearch"/>                        
          </button>
        <div class="flex  flex-col py-16 items-center">
          
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mostrar: Boolean, // Propiedad para controlar si se muestra el modal
  },
  methods: {
    cerrarModal() {
    this.$emit("cerrar-modal");
  },
  },
  
};
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
  }

  .modal {
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    width: 80%;
    transform: translate(-50%,-50%);    
    padding: 20px;
    border-radius: 5px; 
    z-index: 99 !important;
  }

  .modal-content {
    /* Estilos para el contenido del modal, como posición relativa, margen, etc. */
  }

  .modal-close-button {
    width: fit-content;
    display: block;
    padding: 0;
    margin: 0;
    text-align: right;
    cursor: pointer;
  }
</style>
