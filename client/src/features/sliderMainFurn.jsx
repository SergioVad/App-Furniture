import React from "react";
import config from "../app/config.json";
const SliderMailFurn = () => {
    return (
        <>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="auto"
                style={{
                    background: `url(${
                        config.imgSource + "bg/qw.jpg"
                    }) center center / 100% no-repeat`,
                }}>
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="0"
                        className="active buttonSlider"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        className="buttonSlider"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button
                        className="buttonSlider"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button
                        className="buttonSlider"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div className="carouselMain carousel-inner">
                    <div className="carousel-item active">
                        <div className="carouselItem">Преимущество №1</div>
                    </div>
                    <div className="carousel-item">
                        <div className="carouselItem">Преимущество №2</div>
                    </div>
                    <div className="carousel-item">
                        <div className="carouselItem">Преимущество №3</div>
                    </div>
                    <div className="carousel-item">
                        <div className="carouselItem">Преимущество №4</div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default SliderMailFurn;
