import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
    editFurniture,
    getFurnitureByName,
    loadFurnitureListAdmin,
} from '../../../app/store/furniture';
import { getCurrentUserData } from '../../../app/store/users';
import { useGetCurrentElemQuery } from '@/widgets/currentElem/api/currentElemApi';

export const EditElementPage = () => {
    const navigate = useNavigate();
    const user = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const { currentElement } = useParams();
    const { data: furnitureByName } = useGetCurrentElemQuery(currentElement);
    const [product_name_rus, setNameRus] = useState(
        furnitureByName.product_name_rus,
    );
    const [present_price, setPresentPrice] = useState(
        furnitureByName.present_price,
    );
    const [past_price, setPastPrice] = useState(furnitureByName.past_price);
    const [file, setFile] = useState(null);
    const editElement = () => {
        const formDataEdit = new FormData();
        formDataEdit.append('product_name_rus', product_name_rus);
        formDataEdit.append('product_image', file);
        formDataEdit.append('present_price', present_price);
        formDataEdit.append('past_price', past_price);
        dispatch(editFurniture(formDataEdit, furnitureByName._id));
        dispatch(loadFurnitureListAdmin());
        navigate.goBack();
    };
    const handleFile = ({ target }) => {
        setFile(target.files[0]);
    };
    if (user && user.type === 'admin') {
        return (
            <div className="offset-3 col-6">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="product_name_rus">
                            Имя продукта
                        </Form.Label>
                        <Form.Control
                            id={'product_name_rus'}
                            value={product_name_rus}
                            onChange={(e) => setNameRus(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="present_price">Цена</Form.Label>
                        <Form.Control
                            id={'present_price'}
                            value={present_price}
                            onChange={(e) => setPresentPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="past_price">
                            Старая цена
                        </Form.Label>
                        <Form.Control
                            id={'past_price'}
                            value={past_price}
                            onChange={(e) => setPastPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="product_image">
                            Картинка
                        </Form.Label>
                        <Form.Control
                            type="file"
                            id={'product_image'}
                            onChange={handleFile}
                        />
                    </Form.Group>
                </Form>
                <Button variant="outline-success" onClick={editElement}>
                    Добавить
                </Button>
            </div>
        );
    } else {
        navigate('/');
    }
};
