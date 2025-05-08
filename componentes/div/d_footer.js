export function footer() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("footer").innerHTML = `
        <footer>
        <nav class="navbar navbar-expand-lg bg-body-tertiary m-auto">
            <div class="container-fluid">
                <a class="navbar-brand">Conoce nuestras redes sociales</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.facebook.com" target="_blank"
                                rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.instagram.com" target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.twitter.com" target="_blank"
                                rel="noopener noreferrer">Twitter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com" target="_blank"
                                rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.youtube.com" target="_blank"
                                rel="noopener noreferrer">YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </footer>`
    });
}