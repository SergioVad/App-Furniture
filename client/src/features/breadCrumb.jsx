import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = ({ element }) => {
    const navigate = useNavigate();
    const nav = navigate.location.pathname;
    const navArr = nav.slice(1).split("/");
    const currentCategory = (value) => {
        switch (value) {
            case "bedrooms":
                return "/catalog/bedrooms";
            case "livingRooms":
                return "/catalog/livingRooms";
            case "kitchens":
                return "/catalog/kitchens";
            case "hallways":
                return "/catalog/hallways";
            case "dressers":
                return "/catalog/dressers";
            case "cabinets":
                return "/catalog/cabinets";
            case "beds":
                return "/catalog/beds";
            case "tv_stands":
                return "/catalog/tv_stands";
            case "coffee_tables":
                return "/catalog/coffee_tables";
            case "kitchenettes":
                return "/catalog/kitchenettes";
            case "tables":
                return "/catalog/tables";
            case "mattresses":
                return "/catalog/mattresses";
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
                            textDecoration: "none",
                        }}
                        to={"/catalog"}>
                        <span>Каталог</span>
                    </Link>
                </li>
            );
        }
        if (navArr.length === 2) {
            return (
                <>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={"/catalog"}>
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
                        <Link to={"/catalog"}>
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
                    fontSize: "14px",
                }}>
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
