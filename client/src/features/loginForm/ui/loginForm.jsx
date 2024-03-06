import { useEffect, useState } from 'react';
import { validator } from '../../../shared/utils/validator';
import { useDispatch } from 'react-redux';
import { login } from '../../../app/store/users';
import { Navigate, useNavigate } from 'react-router-dom';
import { TextField } from '@/shared/ui/textField/textField';

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        validate();
    }, [data]);
    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения',
            },
            isEmail: {
                message: 'Email введен некорректно',
            },
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения',
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
        dispatch(login(data));
        <Navigate to={'/'} replace />;
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    label={'Электронная почта'}
                    name={'email'}
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Пароль"
                    name={'password'}
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
