import config from '../app/config.json';

const Services = () => {
    return (
        <div className="services">
            <div style={{ fontSize: '2vw' }}>Услуги</div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="services-block">
                    <img
                        src={config.imgSource + 'services/delivery.png'}
                        alt="delivery"
                        className="services-round"
                    />
                    <div className="services-descr">
                        <div className="mb-2">
                            <h5 style={{ fontSize: '1.5vw' }}>Доставка</h5>
                        </div>
                        <div
                            className="text-secondary"
                            style={{ fontSize: '1vw' }}
                        >
                            Доставка до подъезда по КЧР
                        </div>
                    </div>
                </div>
                <div className="services-block">
                    <img
                        src={config.imgSource + 'services/assembly.png'}
                        alt="assembly"
                        className="services-round"
                    />
                    <div className="services-descr">
                        <div className="mb-2">
                            <h5 style={{ fontSize: '1.5vw' }}>Сборка</h5>
                        </div>
                        <div
                            style={{ fontSize: '1vw' }}
                            className="text-secondary"
                        >
                            За дополнительную плату вы можете воспользоваться
                            нашими услугами
                        </div>
                    </div>
                </div>
                <div className="services-block">
                    <img
                        src={config.imgSource + 'services/lifting.jpeg'}
                        alt="lifting"
                        className="services-round"
                    />
                    <div className="services-descr">
                        <div className="mb-2">
                            <h5 style={{ fontSize: '1.5vw' }}>Подъем</h5>
                        </div>
                        <div
                            style={{ fontSize: '1vw' }}
                            className="text-secondary"
                        >
                            Также вы можете заказать подъем на этаж,
                            предварительно
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
