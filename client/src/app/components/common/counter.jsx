import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../../hooks/useBasket";
import config from "../../config.json";
import { addRuble } from "../../utils/addRuble";
const Counter = ({ item, index, onSum }) => {
    const { deleteArrayOfBasket } = useBasket();
    const [count, setCount] = useState(1);
    let fullSum = count * item.present_price;
    useEffect(() => {
        onSum(fullSum, index);
    });
    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };
    const handeDecrement = () => {
        setCount((prevState) => {
            if (prevState <= 1) {
                return (prevState = 1);
            }
            return prevState - 1;
        });
    };
    const handleDeleteBasket = () => {
        deleteArrayOfBasket(index);
    };
    return (
        <tr>
            <td className="td-width">
                {
                    <Link
                        to={`/katalog/${item.category_product}/${item.product_name}`}
                    >
                        <img
                            src={config.imgSource + item.product_image[0]}
                            alt="logo"
                            width="100%"
                        />
                    </Link>
                }
            </td>
            <td className="td-width">{item.product_name_rus}</td>
            <td className="td-width">{addRuble(item.present_price)}</td>
            <td>
                <div className="w-100 d-flex justify-content-center">
                    <div className="basket_block_count d-flex justify-content-between align-items-center">
                        <button
                            className="btn btn-danger btn-sm d-flex justify-content-center align-items-center"
                            onClick={handeDecrement}
                        >
                            -
                        </button>
                        <div className="basket_count">{count}</div>
                        <button
                            className=" btn btn-primary btn-sm d-flex justify-content-center align-items-center"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                </div>
            </td>
            <td className="td-width">{addRuble(fullSum)}</td>
            <td
                className="h3 text-danger"
                style={{
                    cursor: "pointer"
                }}
                onClick={handleDeleteBasket}
            >
                x
            </td>
        </tr>
    );
};

export default Counter;
