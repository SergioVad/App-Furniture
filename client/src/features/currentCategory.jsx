import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFurnitureLoadingStatus } from "../app/store/furniture";
import { getCurrentUserData } from "../app/store/users";
import { arrCatalog, rusArrCatalog } from "../shared/links";
import config from "../app/config.json";
import { addRuble } from "../shared/utils/addRuble";
import { PageLoader } from "@/pages/pageLoader";
import Breadcrumb from "./breadCrumb";
import Pagination from "./pagination";

const CurrentCategory = ({ value }) => {
    const user = useSelector(getCurrentUserData());
    const furnitureLoading = useSelector(getFurnitureLoadingStatus());
    const [currentPage, setCurrentPage] = useState(1);
    const { currentCategory } = useParams();
    useEffect(() => {
        setCurrentPage(1);
    }, [value]);
    if (!value && furnitureLoading) {
        return (
            <div className="offset-2 h3 d-flex justify-content-center my-5">
                <PageLoader />
            </div>
        );
    } else {
        const categoryIndex = arrCatalog.findIndex(
            (item) => item === currentCategory,
        );

        const count = value.length;
        const pageSize = 20;

        const handlePageChange = (page) => {
            setCurrentPage(page);
        };
        const paginate = (items, pageNumber, pageSize) => {
            if (currentCategory === "kitchens") {
                return;
            }
            const startIndex = (pageNumber - 1) * pageSize;
            return [...items].splice(startIndex, pageSize);
        };
        const arrCrop = paginate(value, currentPage, pageSize);
        return (
            <div className="d-flex">
                <div className="d-flex flex-column offset-2 col-10 p-3">
                    <Breadcrumb />
                    <div className="d-flex align-items-center">
                        {currentCategory !== "search" ? (
                            <h2 className="me-4">
                                {rusArrCatalog[categoryIndex]}
                            </h2>
                        ) : (
                            <h2 className="me-4">Найденные товары</h2>
                        )}

                        {user && user.type === "admin" && (
                            <Link to="/product-change">
                                <button className="btn btn-primary">
                                    Добавить
                                </button>
                            </Link>
                        )}
                    </div>
                    {arrCrop && (
                        <div className="d-flex flex-wrap mt-4">
                            {arrCrop.map((item) => (
                                <div
                                    key={item.id_product}
                                    className="cardInMainPage card mb-4">
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                        to={`/catalog/${item.category_product}/${item.product_name}`}>
                                        <div>
                                            <img
                                                className="cardImgInMainPage"
                                                src={
                                                    config.imgSource +
                                                    item.product_image[0]
                                                }
                                            />
                                            {item.type === "discount" && (
                                                <div className="discountValue">
                                                    <span
                                                        style={{
                                                            color: "#cd0404",
                                                            fontWeight: "bold",
                                                        }}>
                                                        -50%
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="cardBodyInMainPage card-body">
                                        <div className="card-title">
                                            <div className="lineHeightInMainPage">
                                                <h4>
                                                    {addRuble(
                                                        item.present_price,
                                                    )}
                                                </h4>
                                                {item.type === "discount" && (
                                                    <s
                                                        style={{
                                                            color: "#6e6d6d",
                                                        }}>
                                                        {addRuble(
                                                            item.past_price,
                                                        )}
                                                    </s>
                                                )}
                                            </div>
                                        </div>
                                        <div className="card-text">
                                            {item.product_name_rus}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                                to={`/catalog/${item.category_product}/${item.product_name}`}></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {arrCrop && (
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    )}
                </div>
            </div>
        );
    }
};

export default CurrentCategory;
