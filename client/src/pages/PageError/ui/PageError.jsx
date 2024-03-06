export const PageError = () => {
    const handleReloadPage = () => {
        window.location.assign('/');
    };
    return (
        <div className="pageError">
            Что-то пошло не так
            <button className="buttonPageError" onClick={handleReloadPage}>
                Перезагрузить страницу
            </button>
        </div>
    );
};
