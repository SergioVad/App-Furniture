import React from "react";
import { Link } from "react-router-dom";
import config from "../app/config.json";
import { arrCatalog, rusArrCatalog } from "../shared/links";

const CatalogMainMenu = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between mt-4">
            {arrCatalog.map((item, index) => (
                <div
                    key={index}
                    style={{
                        position: "relative",
                        width: "33%",
                    }}>
                    <Link to={`/catalog/${item}`}>
                        <img
                            src={config.imgSource + `catalog/${item}.jpg`}
                            className=" text-warning text-center me-1 mb-2"
                            style={{ width: "100%", height: "19vw" }}
                        />
                        <div className="block_catalog">
                            {rusArrCatalog[index]}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CatalogMainMenu;
