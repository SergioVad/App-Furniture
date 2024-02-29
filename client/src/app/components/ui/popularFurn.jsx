import React from "react";
import config from "../../config.json";
import { Link } from "react-router-dom";
import { addRuble } from "../../../shared/utils/addRuble";

const DiscountFurn = ({ value }) => {
    return (
        <div>
            <div
                style={{
                    color: "rgb(17 0 162)",
                    fontSize: "2vw",
                    marginTop: "1.5vw",
                    marginBottom: "1vw"
                }}
                className="mt-2"
            >
                Популярные товары
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                {value.map((item) => (
                    <div
                        key={item.id_product}
                        className="cardInMainPage card mb-3 me-1"
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                            to={`/katalog/${item.category_product}/${item.product_name}`}
                        >
                            <div>
                                <img
                                    className="cardImgInMainPage"
                                    src={
                                        config.imgSource + item.product_image[0]
                                    }
                                />
                            </div>
                        </Link>
                        <div className="cardBodyInMainPage card-body">
                            <div className="card-title">
                                <div className="lineHeightInMainPage">
                                    <h4>{addRuble(item.present_price)}</h4>
                                </div>
                            </div>
                            <div className="card-text">{item.product_name}</div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit"
                                    }}
                                    to={`/katalog/${item.category_product}/${item.product_name}`}
                                >
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountFurn;
