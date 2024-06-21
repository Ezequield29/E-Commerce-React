const Carousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="https://le-cdn.website-editor.net/97f420ccea2146b3ba8894cfae57b06a/dms3rep/multi/opt/Gaming_Photography_v04_0008_UPDATE-1920w.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://cdn.ligadegamers.com/imagenes/procesador-intel-montado-en-una-placa-base-cke.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="https://infopcgamer.com/wp-content/uploads/2020/10/compatibilidad-de-componentes-de-pc.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel;