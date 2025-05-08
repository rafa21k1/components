
export function cookies() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("cookies").innerHTML = `
        <div class="modal" tabindex="-1" id="modal-cookies">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Configuración de cookies</h5>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem impedit libero neque? Sint iusto
                        esse ipsa? Aut amet voluptatem reiciendis in architecto nesciunt? Assumenda necessitatibus eum
                        tenetur eaque obcaecati iure.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="rechazar">Rechazar</button>
                    <button type="button" class="btn btn-primary" id="aceptar">Aceptar</button>
                </div>
            </div>
        </div>
    </div>`
    });
}