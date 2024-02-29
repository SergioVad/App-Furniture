import React from "react";
import { Link } from "react-router-dom";
import config from "../../config.json";
import { arrCatalog, rusArrCatalog } from "./links";

const KatalogMainMenu = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between mt-4">
            {arrCatalog.map((item, index) => (
                <div
                    key={index}
                    style={{
                        position: "relative",
                        width: "33%"
                    }}
                >
                    <Link to={`/katalog/${item}`}>
                        <img
                            src={config.imgSource + `catalog/${item}.jpg`}
                            className=" text-warning text-center me-1 mb-2"
                            style={{ width: "100%", height: "19vw" }}
                        />
                        <div className="block_katalog">
                            {rusArrCatalog[index]}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default KatalogMainMenu;
