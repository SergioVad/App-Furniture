import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addFurniture, loadFurnitureListAdmin } from "../store/furniture";
import { nanoid } from "nanoid";

// import { getCurrentUserData } from "../store/users";
const ChangeProduct = () => {
    const history = useHistory();
    // const user = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const [category_product, setCategory] = useState("");
    const [product_name, setName] = useState("");
    const [product_name_rus, setNameRus] = useState("");
    const [present_price, setPresentPrice] = useState("");
    const [past_price, setPastPrice] = useState("");

    /// IMAGES ///

    const [file, setFile] = useState(null);
    const [product_image_1_descr, setProduct_image_1_descr] = useState("");
    const [product_image_2_descr, setProduct_image_2_descr] = useState("");
    const [product_image_3_descr, setProduct_image_3_descr] = useState("");
    const [product_image_4_descr, setProduct_image_4_descr] = useState("");
    const [product_image_5_descr, setProduct_image_5_descr] = useState("");
    const [product_image_6_descr, setProduct_image_6_descr] = useState("");
    const [product_image_7_descr, setProduct_image_7_descr] = useState("");
    const [product_image_8_descr, setProduct_image_8_descr] = useState("");
    const [product_image_9_descr, setProduct_image_9_descr] = useState("");
    const [product_image_10_descr, setProduct_image_10_descr] = useState("");

    /// IMAGES ///

    const addDevice = () => {
        const formData = new FormData();
        formData.append("id_product", nanoid());
        formData.append("category_product", category_product);
        formData.append("product_name", product_name);
        formData.append("product_name_rus", product_name_rus);
        formData.append("present_price", present_price);
        formData.append("past_price", past_price);
        for (let i = 0; i < file.length; i++) {
            formData.append("product_image", file[i]);
        }
        formData.append(`product_image_1_descr`, product_image_1_descr);
        formData.append(`product_image_2_descr`, product_image_2_descr);
        formData.append(`product_image_3_descr`, product_image_3_descr);
        formData.append(`product_image_4_descr`, product_image_4_descr);
        formData.append(`product_image_5_descr`, product_image_5_descr);
        formData.append(`product_image_6_descr`, product_image_6_descr);
        formData.append(`product_image_7_descr`, product_image_7_descr);
        formData.append(`product_image_8_descr`, product_image_8_descr);
        formData.append(`product_image_9_descr`, product_image_9_descr);
        formData.append(`product_image_10_descr`, product_image_10_descr);
        dispatch(addFurniture(formData));
        dispatch(loadFurnitureListAdmin());
        history.push(`/katalog/${category_product}`);
    };
    const handleFile = ({ target }) => {
        const arrImg = [];
        for (let i = 0; i < target.files.length; i++) {
            arrImg.push(target.files[i]);
        }
        setFile(arrImg);
    };
    const check = ({ target }) => {
        switch (target.id) {
            case "bedrooms":
                setCategory("bedrooms");
                break;
            case "livingRooms":
                setCategory("livingRooms");
                break;
            case "kitchens_module":
                setCategory("kitchens_module");
                break;
            case "kitchen_finished_solution":
                setCategory("kitchen_finished_solution");
                break;
            case "hallways":
                setCategory("hallways");
                break;
            case "dressers":
                setCategory("dressers");
                break;
            case "cabinets":
                setCategory("cabinets");
                break;
            case "beds":
                setCategory("beds");
                break;
            case "tv_stands":
                setCategory("tv_stands");
                break;
            case "coffee_tables":
                setCategory("coffee_tables");
                break;
            case "kitchenettes":
                setCategory("kitchenettes");
                break;
            case "tables":
                setCategory("tables");
                break;
            case "mattresses":
                setCategory("mattresses");
                break;
            default:
                break;
        }
    };
    return (
        <div className="offset-4 p-3 col-4">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="category_product">
                        Категория продукта
                    </Form.Label>
                    <Form.Check
                        type="radio"
                        id={"bedrooms"}
                        name={"category_product"}
                        label={"Спальня"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"livingRooms"}
                        name={"category_product"}
                        label={"Гостинная"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"kitchens_module"}
                        name={"category_product"}
                        label={"Кухня Модульная"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"kitchen_finished_solution"}
                        name={"category_product"}
                        label={"Кухня Готовое Решение"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"hallways"}
                        name={"category_product"}
                        label={"Прихожая"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"dressers"}
                        name={"category_product"}
                        label={"Комод"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"cabinets"}
                        name={"category_product"}
                        label={"Шкаф"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"beds"}
                        name={"category_product"}
                        label={"Кровать"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"tv_stands"}
                        name={"category_product"}
                        label={"ТВ-тумба"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"coffee_tables"}
                        name={"category_product"}
                        label={"Журнальный стол"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"kitchenettes"}
                        name={"category_product"}
                        label={"Кухонный уголок"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"tables"}
                        name={"category_product"}
                        label={"Письменный,компьютерный стол"}
                        onChange={check}
                    />
                    <Form.Check
                        type="radio"
                        id={"mattresses"}
                        name={"category_product"}
                        label={"Матрас"}
                        onChange={check}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_name">Имя продукта</Form.Label>
                    <Form.Control
                        id={"product_name"}
                        value={product_name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_name_rus">
                        Имя продукта на русском
                    </Form.Label>
                    <Form.Control
                        id={"product_name_rus"}
                        value={product_name_rus}
                        onChange={(e) => setNameRus(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_1">Картинки</Form.Label>
                    <Form.Control
                        multiple
                        type="file"
                        id={"product_image_1"}
                        onChange={handleFile}
                    />
                    <Form.Label htmlFor="product_image_1_descr">
                        Описание 1
                    </Form.Label>
                    <Form.Control
                        id={"product_image_1_descr"}
                        value={product_image_1_descr}
                        onChange={(e) =>
                            setProduct_image_1_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_2_descr">
                        Описание 2
                    </Form.Label>
                    <Form.Control
                        id={"product_image_2_descr"}
                        value={product_image_2_descr}
                        onChange={(e) =>
                            setProduct_image_2_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_3_descr">
                        Описание 3
                    </Form.Label>
                    <Form.Control
                        id={"product_image_3_descr"}
                        value={product_image_3_descr}
                        onChange={(e) =>
                            setProduct_image_3_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_4_descr">
                        Описание 4
                    </Form.Label>
                    <Form.Control
                        id={"product_image_4_descr"}
                        value={product_image_4_descr}
                        onChange={(e) =>
                            setProduct_image_4_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_5_descr">
                        Описание 5
                    </Form.Label>
                    <Form.Control
                        id={"product_image_5_descr"}
                        value={product_image_5_descr}
                        onChange={(e) =>
                            setProduct_image_5_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_6_descr">
                        Описание 6
                    </Form.Label>
                    <Form.Control
                        id={"product_image_6_descr"}
                        value={product_image_6_descr}
                        onChange={(e) =>
                            setProduct_image_6_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_7_descr">
                        Описание 7
                    </Form.Label>
                    <Form.Control
                        id={"product_image_7_descr"}
                        value={product_image_7_descr}
                        onChange={(e) =>
                            setProduct_image_7_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_8_descr">
                        Описание 8
                    </Form.Label>
                    <Form.Control
                        id={"product_image_8_descr"}
                        value={product_image_8_descr}
                        onChange={(e) =>
                            setProduct_image_8_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_9_descr">
                        Описание 9
                    </Form.Label>
                    <Form.Control
                        id={"product_image_9_descr"}
                        value={product_image_9_descr}
                        onChange={(e) =>
                            setProduct_image_9_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="product_image_10_descr">
                        Описание 10
                    </Form.Label>
                    <Form.Control
                        id={"product_image_10_descr"}
                        value={product_image_10_descr}
                        onChange={(e) =>
                            setProduct_image_10_descr(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="present_price">
                        Текущая цена
                    </Form.Label>
                    <Form.Control
                        id={"present_price"}
                        value={present_price}
                        onChange={(e) => setPresentPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="past_price">Старая цена</Form.Label>
                    <Form.Control
                        id={"past_price"}
                        value={past_price}
                        onChange={(e) => setPastPrice(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Button variant="outline-success" onClick={addDevice}>
                Добавить
            </Button>
        </div>
    );
};

export default ChangeProduct;
