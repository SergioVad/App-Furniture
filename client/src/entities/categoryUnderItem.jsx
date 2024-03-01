import React from "react";
import { useSelector } from "react-redux";
import { getFurniture } from "../app/store/furniture";
import DiscountFurn from "./discountFurn";
import PopularFurn from "./popularFurn";

const CategoryUnderItem = () => {
    const handlerScrollUp = () => {
        // window.scrollTo({
        //     top: 0,
        //     behavior: "instant"
        // });
    };
    const furniture = useSelector(getFurniture());
    if (furniture) {
        const discountFurn = furniture.filter((u) => u.type === "discount");
        const popularFurn = furniture.filter((u) => u.type === "popular");
        return (
            discountFurn &&
            popularFurn && (
                <div className="d-flex flex-column">
                    <DiscountFurn value={discountFurn} />
                    <PopularFurn value={popularFurn} />
                </div>
            )
        );
    }
};

export default CategoryUnderItem;
