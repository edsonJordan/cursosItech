
<template>
        <section class="section section__banner">
            <div class="content content__banner">
                <div class="video-background">
                    <video class="video__banner" autoplay muted loop>
                        <source src="../assets/videos/BannerIndex.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="gradient-overlay"></div>
                <div class="contenido__banner">
                    <div class="banner__text">
                        <h1 class="title">
                            <span>Bienvenidos a nuestra comunidad de</span>
                            <span>cursos gratuitos en vivo! 
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 500 150" preserveAspectRatio="none">
                                    <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                    <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path>
                                </svg>                              
                            </span>                           
                            
                        </h1>
                        <p class="paragraph">Más de 300,000 estudiantes capacitados y tú puedes ser el próximo.</p>

                    </div>
                    <img class="banner__image" :src="bannerImage" alt="">
                </div>
            </div>
            
        </section>
        <section class="section section__course-recorded">
            <div class="gradient-overlay-section"></div>
            <div class="content content__course-recorded">                
                <div class="content__text">
                    <h2 class="title">
                        <span>Accede a  
                        </span>
                        <span>Cursos Grabados!
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path>
                            </svg>                              
                        </span>                        
                        
                    </h2>
                    <p class="paragraph">Aprende a la hora que quieras desde donde tú elijas. ¡Sin horarios!.</p>
                </div>
                <img class="banner__image" :src="cursosGrabados" alt="">
                
            </div>
        </section>
        <section class="section section__services">
            <div class="gradient-overlay-section"></div>
            <div class="content content__service">                
                <div class="content__text">
                    <h2 class="title title-services">
                        <span>Servicios de 
                        </span>
                        <span>Turnitin y Páginas Web
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path>
                            </svg>                              
                        </span>                        
                        
                    </h2>
                   
                </div>
                <div class="cards__services">
                    <div class="card card-service">
                        <div class="card__header">
                            <img class="image-service" :src="turnitin" alt="" srcset="">
                            <h3>Reportes Turnitin</h3>
                        </div>
                        <div class="card__body">
                            <p>
                                Pasamos tu documento por el Software TURNITIN. Se lo enviamos en formato PDF en tan solo 15 minutos! . Emitimos Certificado TURNITIN.                            
                            </p>
                        </div>
                        <div class="card__footer">                            
                            <a class="btn btn--pill" href="https://wa.link/1avjq7">Contactar por WhatsApp</a>
                        </div>
                    </div>

                    <div class="card card-service">
                        <div class="card__header">
                            <img class="image-service" :src="sitesWeb" alt="" srcset="">
                            <h3>Tu página web en 7 días</h3>
                        </div>
                        <div class="card__body">
                            <p>
                                Ofrecemos un servicio de diseño web rápido y eficiente, entregamos tu sitio web profesional en tan solo 7 días.                            
                            </p>
                        </div>
                        <div class="card__footer">   
                            <a class="btn btn--pill" href="https://itec123.com/paginas-web/">Más información</a>                         
                        </div>
                    </div>
                </div>  
            </div>
        </section>
        <section class="section section__intitutions">
            <div class="gradient-overlay-section"></div>
            <div class="content content__intitutions">
                <div class="content__text">
                    <h2 class="title title-intitutions">
                        <span>Instituciones que
                        </span>
                        <span>confían
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path>
                            </svg>                              
                        </span>                        
                        <span>
                            en ITEC 123
                        </span>
                    </h2>
                   
                </div>
                <div>
                    <CarouselInstitutions/>
                </div>
                <div class="cards__count-participants">
                    <div class="card">
                        <div class="card__header">
                            <div class="icon__image">
                                <svg class="image__participants" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>                                
                            </div>
                        </div>
                        <div class="card__body">
                            <h2>+300,000</h2>
                            <p>Estudiantes en Latinoamérica</p>
                        </div>
                        <div class="card__footer">

                        </div>
                    </div>
                    <div class="card">
                        <div class="card__header">
                            <div class="icon__image">
                                <svg class="image__participants"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
                            </div>
                        </div>
                        <div class="card__body">
                            <h2>+10</h2>
                            <p>Cursos en vivo por semana</p>
                        </div>
                        <div class="card__footer">

                        </div>
                    </div>
                    <div class="card">
                        <div class="card__header">
                            <div class="icon__image">
                                <svg class="image__participants" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z"/></svg>
                            </div>
                        </div>
                        <div class="card__body">
                            <h2>+100</h2>
                            <p>Cursos grabados</p>
                        </div>
                        <div class="card__footer">

                        </div>
                    </div>
                    <div class="card">
                        <div class="card__header">
                            <div class="icon__image">
                                <svg class="image__participants"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"/></svg>
                            </div>
                        </div>
                        <div class="card__body">
                            <h2>+50</h2>
                            <p>Instructores y coordinadores</p>
                        </div>
                        <div class="card__footer">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section__intitutions">
            <div class="gradient-overlay-section"></div>
            <div class="content content__intitutions">
                <div class="content__text">
                    <h2 class="title title-intitutions">
                        <span>Trabaja con 
                        </span>
                        <span>nosotros
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path>
                            </svg>                              
                        </span> 
                    </h2>                   
                </div>
                <div class="cards__works">
                    <div class="card">
                        <div class="card__header">
                            <h2>Como Docente</h2>
                            <p>Únete a nuestro equipo de docentes y conviértete en una fuente de inspiración para miles de personas en Perú y Latinoamérica.</p>
                        </div>
                        <div class="card__body">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Experto en un tema
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Conexión a internet estable</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Pasión por la enseñanza</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Disponibilidad de 4.5 horas semanales.</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Horario: Lun-Mie-Vie o Mar-Jue-Sab (6:00 pm a 7:30 pm o 8:00 pm a 9:30 pm)
                                </li>
                            </ul>
                        </div>
                        <div class="card__footer">
                            <p> Si cumples con los criterios mencionados anteriormente, nos encantaría conocer más sobre ti.</p>
                            <a class="btn btn--pill" href="https://wa.link/qk6trm">Enviar CV y Postular</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__header">
                            <h2>Como Coordinador</h2>
                            <p>Únete a nuestro equipo de coordinadores educativos y conviértete en una fuente de inspiración para miles de personas en Perú y Latinoamérica.</p>
                        </div>
                        <div class="card__body">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Experto en un tema
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Conexión a internet estable</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Pasión por la enseñanza</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Disponibilidad de 4.5 horas semanales.</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Tener entre 20 a 27 años.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Haber estudiado por lo menos 1 curso en ITEC123.
                                </li>
                            </ul>
                        </div>
                        <div class="card__footer">
                            <p> Si cumples con los criterios mencionados anteriormente, nos encantaría conocer más sobre ti.</p>
                            <a class="btn btn--pill" href="https://forms.gle/2N42izP4i5p5q962A">Postular</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__header">
                            <h2>Como Practicante</h2>
                            <p>Únete a nuestro proyecto y conviértete en una fuente de inspiración para miles de personas en Perú y Latinoamérica.</p>
                        </div>
                        <div class="card__body">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Estudiante de Instituto o Universidad
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Disponibilidad de 3 a 4 horas diarias.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Tener conocimientos de herramientas digitales y Ofimática a nivel Intermedio.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    Haber estudiado por lo menos 1 curso en ITEC123.
                                </li>
                                
                            </ul>
                        </div>
                        <div class="card__footer">
                            <p> Si cumples con los criterios mencionados anteriormente, nos encantaría conocer más sobre ti.</p>
                            <a class="btn btn--pill" href="https://wa.link/ei3pkj">Enviar CV y Postular</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section__intitutions">
            <div class="gradient-overlay-section"></div>
            <div class="content content__intitutions">
                <div class="content__text">
                    <h2 class="title title-intitutions">
                        <span>Testimonios de nuestros 

                        </span>
                        <span>estudiantes
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffff" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path>
                            </svg>                              
                        </span>  
                    </h2>
                   
                </div>
                <CarouselTestimonies/>
          
            </div>
        </section>
</template>

<script>

import { defineComponent } from 'vue'
import { Navigation } from 'vue3-carousel'
import CarouselInstitutions from '../components/carousels/carouselInstitutios.vue';
import CarouselTestimonies from '../components/carousels/CarouselTestimonies.vue';


// Importa tus imágenes aquí
import bannerImage from '@/assets/images/banner__index.webp';
import cursosGrabados from '@/assets/images/cursos-grabados-principal.webp';
import turnitin from '@/assets/images/Turnitin.webp';
import sitesWeb from '@/assets/images/web-sites.webp';

// Carrouses Instutions


export default defineComponent({

  components: {
    Navigation,
    CarouselInstitutions,
    CarouselTestimonies
  },
  methods:{
    
  },
  data: () => ({
    bannerImage,
    cursosGrabados,
    turnitin,
    sitesWeb
    ,
  }),
});



</script>
