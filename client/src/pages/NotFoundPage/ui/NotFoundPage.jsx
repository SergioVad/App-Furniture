import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
    const navigation = useNavigate();
    const handleButton = () => {
        navigation('/');
    };
    return (
        <>
            Страница не найдена
            <button onClick={handleButton}>На главную страницу</button>
        </>
    );
};
