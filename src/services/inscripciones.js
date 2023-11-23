import api from './api';



export async function create(tokken, data) {
  try {
    // const response = await api.post('fluentform/v1/itech-submit', data, {
    const response = await api.post('fluentform/v1/test-submit', data, {
      headers: {
        'Authorization': `Bearer ${tokken}`
      }
    });    
    return response;
  } catch (error) {    
    // // Manejar errores de inicio de sesión
    // console.error("Error de Axios:", error);
    // console.error("Mensaje de error:", error.message);
    // console.error("Datos del error:", error.response.data);
    throw error;
  }
}

/* export async function create(tokken, data) {

  const data2 = {
    form_id: '3',
    data: {
      input_email: 'pruebafront@gmail.com',
      input_text: 'test',
      message: 'Hello',
    },
    input_text: '',
  };
  
  const config = {
    method: 'post',
    url: 'http://localhost/2023/wordpress/prueba-tecnica/wp-json/fluentform/v1/itech-submit',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0LzIwMjMvd29yZHByZXNzL3BydWViYS10ZWNuaWNhIiwiaWF0IjoxNjk3MDQ0MTU5LCJuYmYiOjE2OTcwNDQxNTksImV4cCI6MTY5NzA0Nzc1OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ym2zu-NDVvRbOi_y4-vWMkkEpWWsP89Zf3T9BJ8JHUs',
      'Content-Type': 'application/json',
    },
    data: data2,
  };
  
  await axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('Error:', error);
    });


}
 */