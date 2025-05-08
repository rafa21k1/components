const plantilla_index = `
        <div class="welcome">
        <div class="welcome_container">
            <section class="welcome_section">
                <h1 class="welcome_title">Empieza tu oposición y disfurta de las ventajas laborales para tu vida.</h1>
                <p>Elige aprender Oposiciones de una vez por todas, una vez que termines este curso serás
                    capaz de trabajar para el estado en el curso que hayas elegido.</p>
                <a href="/componentes/html/cursos.html" class="cta">Comienza ahora</a>
            </section>
        </div>
    </div>
    <main>
        <div class="container-about">
            <h2 class="subtitle">¿Qué aprenderás en este curso?</h2>
            <p class="about__paragraph">Todo lo necesario y obligatorio para presentarte a una Oposición (Relaciones
                Exteriores, Gestión de Proyectos, Ingenierías,
                Medio Ambiente y más)
            </p>
        </div> <!-- Texto animado -->
        <div class="container-text">
            <h2 class="title">
                <span class="title-word title-word-1">Próximo</span>
                <span class="title-word title-word-2">examen</span>
                <span class="title-word title-word-3">27/10/2025</span>
            </h2>
        </div>
    </main>`;
const plantilla_cursos = `
    <div class="oposiciones">
        <div class="oposicion">
            <h3>Desarrollo Web</h3>
            <p class="descripcion">Aprende a crear sitios y aplicaciones web desde cero.</p>
            <p><strong>Requisitos:</strong> Conocimientos básicos de informática.</p>
            <p><strong>Fecha de inicio:</strong> 20/05/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Marketing Digital</h3>
            <p class="descripcion">Domina las herramientas y estrategias del marketing online.</p>
            <p><strong>Requisitos:</strong> Mayor de edad, acceso a internet.</p>
            <p><strong>Fecha de inicio:</strong> 01/06/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Ciberseguridad</h3>
            <p class="descripcion">Protege redes, sistemas y datos frente a amenazas digitales.</p>
            <p><strong>Requisitos:</strong> Conocimientos en redes o informática.</p>
            <p><strong>Fecha de inicio:</strong> 15/06/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Administración Empresarial</h3>
            <p class="descripcion">Curso práctico sobre gestión de empresas y finanzas.</p>
            <p><strong>Requisitos:</strong> Bachillerato o experiencia laboral.</p>
            <p><strong>Fecha de inicio:</strong> 05/07/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Diseño Gráfico</h3>
            <p class="descripcion">Crea contenido visual con Photoshop, Illustrator y más.</p>
            <p><strong>Requisitos:</strong> Gusto por lo visual y creatividad.</p>
            <p><strong>Fecha de inicio:</strong> 18/07/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>
        <!-- Footer que ocupa las 5 columnas -->
        <div class="oposicion-footer">
            <p>Descubre todos nuestros cursos profesionales diseñados para mejorar tu perfil laboral y abrir nuevas
                oportunidades. ¡Empieza hoy tu camino hacia el éxito!</p>
            <a href="../HTML/contacto.html" class="btn-contacto">Solicita información</a>
        </div>
    </div>
`;

const plantilla_metodologia = `
    <div id="carouselExample" class="carousel carousel-dark slide p-5">
        <h2>Metodología de estudios</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam odio, omnis harum aliquam, nihil quae
            ex at, quam molestias ipsa. Quidem, ad corrupti assumenda id saepe totam quia perspiciatis.</p>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="schedule-container">
                    <h1>Horario de Clases - Setiembre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td><strong>2</strong> Matemáticas</td>
                                <td><strong>3</strong> Administración</td>
                                <td><strong>4</strong> Finanzas</td>
                                <td><strong>5</strong> Contabilidad</td>
                                <td><strong>6</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>9</strong> Inglés</td>
                                <td><strong>10</strong> Programación</td>
                                <td><strong>11</strong> Matemáticas</td>
                                <td><strong>12</strong> Inglés</td>
                                <td><strong>13</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>16</strong> Inglés</td>
                                <td><strong>17</strong> Derecho</td>
                                <td><strong>18</strong> Administración</td>
                                <td><strong>19</strong> Finanzas</td>
                                <td><strong>20</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>23</strong> Derecho</td>
                                <td><strong>24</strong> Contabilidad</td>
                                <td><strong>25</strong> Inglés</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>30</strong> MS Office</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Octubre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td><strong>1</strong> Administración</td>
                                <td><strong>2</strong> Finanzas</td>
                                <td><strong>3</strong> Contabilidad</td>
                                <td><strong>4</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Programación</td>
                                <td><strong>9</strong> Matemáticas</td>
                                <td><strong>10</strong> Inglés</td>
                                <td><strong>11</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>14</strong> Inglés</td>
                                <td><strong>15</strong> Derecho</td>
                                <td><strong>16</strong> Administración</td>
                                <td><strong>17</strong> Finanzas</td>
                                <td><strong>18</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>21</strong> Derecho</td>
                                <td><strong>22</strong> Contabilidad</td>
                                <td><strong>23</strong> Inglés</td>
                                <td><strong>24</strong> Programación</td>
                                <td><strong>25</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>28</strong> MS Office</td>
                                <td><strong>29</strong> Contabilidad</td>
                                <td><strong>30</strong> Programación</td>
                                <td><strong>31</strong> Derecho</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Noviembre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Diciembre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Enero 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Febrero 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Marzo 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Abril 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Mayo 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Junio 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`;

const plantilla_oposiciones = `
    <div class="titulo-oposiciones">
        <h2>Oposiciones</h2>
    </div>
    <!-- Bloque de 5 columnas con oposiciones -->
    <div class="oposiciones">
        <div class="oposicion">
            <h3>Guardia Civil</h3>
            <p class="descripcion">Oposición para acceder al cuerpo de la Guardia Civil.</p>
            <p><strong>Requisitos:</strong> Nacionalidad española, sin antecedentes penales.</p>
            <p><strong>Fecha de examen:</strong> 15/06/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Policía Nacional</h3>
            <p class="descripcion">Acceso a la escala básica de la Policía Nacional.</p>
            <p><strong>Requisitos:</strong> Mayor de edad, bachillerato finalizado.</p>
            <p><strong>Fecha de examen:</strong> 22/07/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Tropa y Marinería</h3>
            <p class="descripcion">Ingreso a las Fuerzas Armadas.</p>
            <p><strong>Requisitos:</strong> Entre 18 y 29 años, nacionalidad española o comunitaria.</p>
            <p><strong>Fecha de examen:</strong> 10/05/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Administración</h3>
            <p class="descripcion">Puesto administrativo en la AGE.</p>
            <p><strong>Requisitos:</strong> Graduado en ESO mínimo.</p>
            <p><strong>Fecha de examen:</strong> 01/09/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>

        <div class="oposicion">
            <h3>Educación Primaria</h3>
            <p class="descripcion">Plazas para maestros de primaria.</p>
            <p><strong>Requisitos:</strong> Grado en Magisterio o equivalente.</p>
            <p><strong>Fecha de examen:</strong> 10/10/2025</p>
            <a href="#" class="temario-link">Ver temario</a>
        </div>
        <!-- Bloque final que ocupa las 5 columnas -->
        <div class="oposicion-footer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae lacus nec ligula gravida
                dapibus. Curabitur blandit augue sed nisi tincidunt accumsan.</p>
            <a href="../HTML/contacto.html" class="btn-contacto">Solicita información</a>
        </div>
    </div>
`;

const plantilla_contacto = `
    <h3 class="m-4 p-1">Contacto</h3>
    <div class="container-fluid m-4 p-4 bg-body-secondary">
        <div class="row align-items-start">
            <form class="m-auto p-1 col-sm-3" id="form">
                <div class="mb-3">
                    <label class="form-label">Nombres</label>
                    <input type="text" class="form-control" id="firstname" name="firstname">
                </div>
                <div class="mb-3">
                    <label class="form-label">Apellidos</label>
                    <input type="text" class="form-control" id="lastname" name="lastname">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="userEmail" name="userEmail">
                </div>
                <div class="mb-3">
                    <label class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="userContact" name="userContact">
                </div>
                <div class="mb-3">
                    <label class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="userAddress" name="userAddress">
                </div>
                <div class="mb-3">
                    <div class="container text-center">
                        <div class="row align-items-start">
                            <div class="col">
                                <label class="form-label">Cógigo Postal</label>
                                <input type="text" class="form-control" id="userCP" name="userCP">
                            </div>
                            <div class="col">
                                <label class="form-label">Localidad</label>
                                <input type="text" class="form-control" id="userLocality" name="userLocality">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-3">
                    <label class="form-label">Provincia</label>
                    <select class="form-select" aria-label="Default select example" name="userProvince"
                        id="userProvince">
                        <option selected disabled>Seleccione una provincia</option>
                        <option value="A Coruña">A Coruña</option>
                        <option value="Álava">Álava</option>
                        <option value="Albacete">Albacete</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Almería">Almería</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Cádiz">Cádiz</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellón">Castellón</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Ciudad-Real">Ciudad-Real</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Extremadura">Extremadura</option>
                        <option value="Girona">Girona</option>
                        <option value="Granada">Granada</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Guipúzcoa">Guipúzcoa</option>
                        <option value="Huelva">Huelva</option>
                        <option value="Huesca">Huesca</option>
                        <option value="Jaén">Jaén</option>
                        <option value="Las Palmas de Gran Canaria">Las Palmas de Gran Canaria</option>
                        <option value="León">León</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Logroño">Logroño</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Melilla">Melilla</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Navarra">Navarra</option>
                        <option value="Ourense">Ourense</option>
                        <option value="Pontevedra">Pontevedra</option>
                        <option value="Salamanca">Salamanca</option>
                        <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Soria">Soria</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vizcaya">Vizcaya</option>
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>
`;        
export function body() {
    document.addEventListener("DOMContentLoaded", function () {
        /* Obtiene la ruta del archivo HTML que se está mostrando en el navegador. */
        const path = window.location.pathname;      

        //path.endsWith() sirve para comprobar si la URL termina con un string determinado.
        if (path.endsWith("index.html") || path === "/" || path === "/index.html") {
            document.getElementById("body").innerHTML = plantilla_index;
        } else if (path.endsWith("cursos.html")) {
            document.getElementById("body").innerHTML = plantilla_cursos;
        } else if (path.endsWith("metodologia.html")) {
            document.getElementById("body").innerHTML = plantilla_metodologia;
        } else if (path.endsWith("oposiciones.html")) {
            document.getElementById("body").innerHTML = plantilla_oposiciones;
        } else if (path.endsWith("contacto.html")) {
            document.getElementById("body").innerHTML = plantilla_contacto;
        }
    });
}

