export default function Menu(props){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand fs-2" href="#">Acolhe-te</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Denúncias</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Serviços</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contato</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 fs-5" type="search" placeholder="digite algo.." aria-label="Search"/>
                    <button class="btn btn-outline-success fs-5" type="submit">Pesquisar</button>
                </form>
                </div>
            </div>
            </nav>
            {/* Exemplo passado em aula
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-8">coluna 1</div>
                    <div className="col-6 col-md-4">coluna 2</div>
                </div>
            </div> */}
        </>
        
    )
}
function OutroMenu(){

}