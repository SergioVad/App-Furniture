import React from "react";
import { Link } from "react-router-dom";
export const arrCatalog = [
    "bedrooms",
    "livingRooms",
    "kitchens_module",
    "kitchen_finished_solution",
    "hallways",
    "dressers",
    "cabinets",
    "beds",
    "tv_stands",
    "coffee_tables",
    "kitchenettes",
    "tables",
    "mattresses"
];
export const rusArrCatalog = [
    "Спальни",
    "Гостиные",
    "Кухни Модульные",
    "Кухни Готовое Решение",
    "Прихожие",
    "Комоды",
    "Шкафы",
    "Кровати",
    "ТВ тумбы",
    "Журнальные столы",
    "Столы, стулья, кухонные уголки",
    "Письменные и компьютерные столы",
    "Матрасы"
];

const Links = () => {
    const handlerScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    };
    return arrCatalog.map((item, i) => (
        <li key={i} className="nav-item mb-2">
            <Link
                to={`/katalog/${item}`}
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}
                onClick={handlerScrollUp}
            >
                <button
                    type="button"
                    className="btn-navMenu btn btn-outline-info d-flex justify-content-center align-items-center"
                >
                    {rusArrCatalog[i]}
                </button>
            </Link>
        </li>
    ));
};

export default Links;
