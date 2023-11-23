export function isTokenExpired() {
    const jwtToken = localStorage.getItem('jwtToken');
  
    if (jwtToken === null || jwtToken === undefined) {
      return {
        exists: false,
        isExpired: false,
        credential: null,
      };
    }
  
    const sessionStorage = JSON.parse(jwtToken);
    const fechaActualMilisegundos = new Date().getTime();
    const timestampUNIX = Math.floor(fechaActualMilisegundos / 1000);
    const tokenExpired = timestampUNIX > sessionStorage.endTokken;
    
    if (tokenExpired) {
      return {
        exists: true,
        isExpired: true,
        credential: null,
      };
    }
  
    return {
      exists: true,
      isExpired: false,
      credential: sessionStorage,
    };
  }
  