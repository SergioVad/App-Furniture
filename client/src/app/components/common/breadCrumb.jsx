import React from "react";
import { Link, useHistory } from "react-router-dom";

const Breadcrumb = ({ element }) => {
    const history = useHistory();
    const nav = history.location.pathname;
    const navArr = nav.slice(1).split("/");
    const currentCategory = (value) => {
        switch (value) {
            case "bedrooms":
                return "/katalog/bedrooms";
            case "livingRooms":
                return "/katalog/livingRooms";
            case "kitchens":
                return "/katalog/kitchens";
            case "hallways":
                return "/katalog/hallways";
            case "dressers":
                return "/katalog/dressers";
            case "cabinets":
                return "/katalog/cabinets";
            case "beds":
                return "/katalog/beds";
            case "tv_stands":
                return "/katalog/tv_stands";
            case "coffee_tables":
                return "/katalog/coffee_tables";
            case "kitchenettes":
                return "/katalog/kitchenettes";
            case "tables":
                return "/katalog/tables";
            case "mattresses":
                return "/katalog/mattresses";
            default:
                break;
        }
    };

    const func = () => {
        if (navArr.length === 1) {
            return (
                <li className="breadcrumb-item">
                    <Link
                        style={{
                            color: "black",
                            textDecoration: "none"
                        }}
                        to={"/katalog"}
                    >
                        <span>Каталог</span>
                    </Link>
                </li>
            );
        }
        if (navArr.length === 2) {
            return (
                <>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={"/katalog"}>
                            <span>Каталог</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <span>Категория</span>
                    </li>
                </>
            );
        } else if (navArr.length === 3) {
            return (
                <>
                    <li className="breadcrumb-item ">
                        <Link to={"/katalog"}>
                            <span>Каталог</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={currentCategory(navArr[1])}>
                            <span>Категория</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <span>{element.product_name_rus}</span>
                    </li>
                </>
            );
        }
    };
    return (
        <nav aria-label="breadcrumb">
            <ol
                className="breadcrumb"
                style={{
                    fontSize: "14px"
                }}
            >
                <li className="breadcrumb-item active" aria-current="page">
                    {
                        <Link to={`/`}>
                            <span>Главная страница</span>
                        </Link>
                    }
                </li>
                {func()}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
