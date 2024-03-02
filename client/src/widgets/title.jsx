import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData, getIsLoggedIn } from "../app/store/users";

const Title = () => {
    const currentUser = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <div
            className="offset-2 col-10"
            style={{
                position: "relative",
                backgroundColor: "rgb(231, 230, 230)",
            }}>
            <div className="title">
                <Link className="title-link" to="#">
                    Информация
                </Link>
                <Link className="title-link" to="/catalog">
                    Каталог
                </Link>
                <Link className="title-link" to="/dostavka-sborka">
                    Доставка и оплата
                </Link>

                {/* {currentUser && currentUser.type === "admin" && (
                    <Link
                        to="/edit"
                        style={{
                            color: "black",
                            fontSize: "100%",
                            textDecoration: "none"
                        }}
                    >
                        Редактировать
                    </Link>
                )} */}
                {
                    // isLoggedIn &&
                    //     currentUser
                    // ? (
                    //     <Link
                    //         to="/profile"
                    //         className="title-link"
                    //         style={{
                    //             color: "black",
                    //             fontSize: "18px"
                    //         }}
                    //     >
                    //         {currentUser.name}
                    //     </Link>
                    // ) :
                    //
                }
            </div>
        </div>
    );
};

export default Title;
