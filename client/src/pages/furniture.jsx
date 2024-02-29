import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArrayByName, getFurnitureByCategory } from "../store/furniture";
import CurrentCategory from "../components/ui/currentCategory";
import CurrentElem from "../components/ui/currentElem";
import Katalog from "../components/ui/katalog";
import { useSearchElem } from "../hooks/useSearchElem";
const Furniture = () => {
    const { currentCategory, currentElement } = useParams();
    const valueBedrooms = useSelector(getFurnitureByCategory("bedrooms"));
    const valueLivingRooms = useSelector(getFurnitureByCategory("livingRooms"));
    const valueHallways = useSelector(getFurnitureByCategory("hallways"));
    const valueDressers = useSelector(getFurnitureByCategory("dressers"));
    const valueCabinets = useSelector(getFurnitureByCategory("cabinets"));
    const valueBed = useSelector(getFurnitureByCategory("bed"));
    const valueTv_stands = useSelector(getFurnitureByCategory("tv_stands"));
    const valueCoffee_tables = useSelector(
        getFurnitureByCategory("coffee_tables")
    );
    const valueKitchenettes = useSelector(
        getFurnitureByCategory("kitchenettes")
    );
    const valueTables = useSelector(getFurnitureByCategory("tables"));
    const valueMattresses = useSelector(getFurnitureByCategory("mattresses"));
    const valueKitchensModule = useSelector(getFurnitureByCategory("kitchens_module"));
    const valueKitchenFinishedSolution = useSelector(getFurnitureByCategory("kitchen_finished_solution"));
    const { valueSearch } = useSearchElem();
    const valueSearchFurniture = useSelector(getArrayByName(valueSearch));
    const chooseCategory = () => {
        switch (currentCategory) {
            case "bedrooms":
                return valueBedrooms;
            case "livingRooms":
                return valueLivingRooms;
            case "kitchens_module":
                return valueKitchensModule;
            case "kitchen_finished_solution":
                return valueKitchenFinishedSolution;
            case "hallways":
                return valueHallways;
            case "dressers":
                return valueDressers;
            case "cabinets":
                return valueCabinets;
            case "beds":
                return valueBed;
            case "tv_stands":
                return valueTv_stands;
            case "coffee_tables":
                return valueCoffee_tables;
            case "kitchenettes":
                return valueKitchenettes;
            case "tables":
                return valueTables;
            case "mattresses":
                return valueMattresses;
            case "search":
                return valueSearchFurniture;
            default:
                break;
        }
    };
    return (
        <>
            {currentElement ? (
                <CurrentElem />
            ) : currentCategory ? (
                <CurrentCategory value={chooseCategory()} />
            ) : (
                <Katalog />
            )}
        </>
    );
};

export default Furniture;
