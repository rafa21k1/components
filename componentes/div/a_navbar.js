
export function navbar() {
    document.addEventListener("DOMContentLoaded", function () {
        /* Obtiene la ruta del archivo HTML que se está mostrando en el navegador. */
        const path = window.location.pathname;
        const isActive = (htmlFile) => path.endsWith(htmlFile) ;


        document.getElementById("navbar").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-auto">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/images/Logo.webp" alt="Bootstrap" width="40" height="35"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse align-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link ${isActive("index.html") ? "active" : ""}" href="/index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive("metodologia.html") ? "active" : ""}" href="/componentes/html/metodologia.html">Metodología</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive("cursos.html") ? "active" : ""}" href="/componentes/html/cursos.html">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive("oposiciones.html") ? "active" : ""}"" href="/componentes/html/oposiciones.html">Oposiciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive("contacto.html") ? "active" : ""}"" href="/componentes/html/contacto.html">Contacto</a>
                    </li>
                    
                </ul>
                <!-- Button trigger modal login -->
                <p id='user' class="text-white"></p>
                <button type="button" class="btn btn-danger m-1" id="logout">
                    Cerrar Sesión
                </button>
                <button type="button" class="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    id="btn-sesion">
                    Iniciar Sesión
                </button>
                <!-- Modal login -->
                <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Login</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="d-flex" id="form-login">
                                    <div class="mb-2 p-1">
                                        <input type="email" class="form-control me-auto" placeholder="E-mail"
                                            name="email" id="emailUser-login" aria-describedby="emailHelp" required>
                                    </div>
                                    <div class="mb-2 p-1">
                                        <input type="password" class="form-control me-auto" placeholder="Password"
                                            name="password" id="passUser-login">
                                    </div>
                            </div>
                            <div class="mb-2 p-1">
                                <p id="message-error-login" class="m-3 p 3"></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    id="closed">Close</button>
                                <button type="button" class="btn btn-primary" id="submit-login">Login</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Button trigger Registro -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    id="btn-register">
                    Registro
                </button>
                <!-- Modal Registro-->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="d-flex" id="form-register">
                                    <div class="mb-2 p-1">
                                        <input type="text" class="form-control me-auto" placeholder="Username"
                                            name="username" id="nameUser-register" aria-label="default input example">
                                    </div>
                                    <div class="mb-2 p-1">
                                        <input type="email" class="form-control me-auto" placeholder="E-mail"
                                            name="email" id="emailUser-register" aria-describedby="emailHelp"
                                            required>
                                    </div>
                                    <div class="mb-2 p-1">
                                        <input type="password" class="form-control me-auto" placeholder="Password"
                                            name="password" id="passUser-register">
                                    </div>
                            </div>
                            <div class="mb-2 p-1">
                                <p id="message-error-register" class="m-3 p 3"></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <input type="submit" class="btn btn-primary" id="submit-register" input>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>`
    
    });
}
