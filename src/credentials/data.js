function isDataExpired() {
    const storedData = JSON.parse(localStorage.getItem('itechData'));
  
    if (storedData === null || storedData === undefined) {
      return {
        ...storedData,
        exists: false,
        isExpired: false,
      };
    }
  
    const expirationTimestamp = storedData.expiration || 0;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const isExpired = currentTimestamp > expirationTimestamp;
  
    if (isExpired) {
      return {
        ...storedData,
        exists: true,
        isExpired: true,
      };
    }
  
    return {
      ...storedData,
      exists: true,
      isExpired: false,
    };
  }
  
export { isDataExpired };