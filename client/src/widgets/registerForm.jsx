import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "@/app/store/users";
import { validator } from "@/shared/utils/validator";
import { Navigate } from "react-router-dom";
import TextField from "@/entities/textField";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: "", password: "", name: "" });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        validate();
    }, [data]);
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву",
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число",
            },
            min: {
                message: "Пароль должен содержать минимум 8 символов",
                value: 8,
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
        dispatch(signUp(data));
        <Navigate to="users" replace />;
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    label={"Электронная почта"}
                    name={"email"}
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Имя"
                    name={"name"}
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Пароль"
                    name={"password"}
                    value={data.password}
                    onChange={handleChange}
                    type="password"
                    error={errors.password}
                />
                <button disabled={!isValid}>Отправить</button>
            </form>
        </>
    );
};

export default RegisterForm;
