<template>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      },
    },
  };
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .loading-spinner {
    border: 6px solid rgba(255, 255, 255, 0.3);
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>