import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div
            className="footer offset-2 text-white p-2"
            style={{ backgroundColor: 'rgb(22, 22, 22)' }}
        >
            <div className="d-flex m-3 justify-content-around">
                <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">Информация</div>
                    <Link to="#">Производители</Link>
                    <Link to="/kak-oplatit">Способы оплаты</Link>
                    <Link to="/dostavka-sborka">Доставка</Link>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">Клиентам</div>
                    <Link to="#">Обратная связь</Link>
                    <Link to="#">Помощь с выбором мебели</Link>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="mb-2">Компания</div>
                    <Link to="#">О нас</Link>
                </div>
                <div className="time_work text-secondary">
                    <span className="h4">8-964-042-14-85</span> <br /> Режим
                    работы: с 09:00 до 20:00 (МСК)
                    <br />
                    <div style={{ width: '50px', height: '50px' }}>
                        <Link
                            aria-current="page"
                            to="/login"
                            className="title-link"
                            style={{
                                color: 'rgb(22, 22, 22)',
                            }}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
