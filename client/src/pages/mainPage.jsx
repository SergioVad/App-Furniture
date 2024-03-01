import React from "react";
import DiscountFurn from "../components/ui/discountFurn";
import PopularFurn from "../components/ui/popularFurn";
import SliderMailFurn from "../components/common/sliderMainFurn";
import { useSelector } from "react-redux";
import { getFurniture, getFurnitureLoadingStatus } from "../store/furniture";
import KatalogMainMenu from "../components/ui/katalogMainMenu";
import Services from "../components/common/services";
import { Loader } from "../hooks/loader";

const MainPage = () => {
    const furniture = useSelector(getFurniture());
    const loading = useSelector(getFurnitureLoadingStatus());
    if (loading) {
        <Loader />;
    }
    if (!loading && furniture) {
        const discountFurn = furniture.filter((u) => u.type === "discount");
        const popularFurn = furniture.filter((u) => u.type === "popular");
        return (
            discountFurn &&
            popularFurn && (
                <div className="d-flex flex-column offset-2 p-3">
                    <SliderMailFurn />
                    <KatalogMainMenu />
                    <DiscountFurn value={discountFurn} />
                    <PopularFurn value={popularFurn} />
                    <Services />
                </div>
            )
        );
    }
};

export default MainPage;
