// TODO - На данный момент не используется, возможно
// подключить для тестового варианта

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getCurrentUserData,
    getIsLoggedIn,
    updateUser,
} from "../app/store/users";
import { validator } from "../shared/utils/validator";
import TextField from "../app/components/common/form/textField";
const Profile = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const [data, setData] = useState({ name: "" });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (currentUser && isLoggedIn) {
            setData({ ...currentUser });
        }
    }, []);
    useEffect(() => {
        validate();
    }, [data]);
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
        },
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updateUser(data));
    };
    if (!currentUser) return "loading";
    return (
        <div className="offset-4 col-4 border border-secondary p-3">
            <div className="h2 my-3">Изменить данные</div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label={"Имя"}
                    name={"name"}
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <button className="btn btn-primary mb-2" disabled={!isValid}>
                    Отправить
                </button>
            </form>
            <button className="btn btn-danger" disabled={!isValid}>
                <Link to="/logout" className="dropdown-item">
                    Выйти
                </Link>
            </button>
        </div>
    );
};

export default Profile;
