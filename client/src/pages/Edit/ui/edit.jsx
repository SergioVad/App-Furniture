import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getFurniture } from '../../../app/store/furniture';
import { getCurrentUserData } from '../../../app/store/users';
import config from '../app/config.json';

export const Edit = () => {
    const navigate = useNavigate();
    const user = useSelector(getCurrentUserData());
    const handlerScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    };
    const furniture = useSelector(getFurniture());
    if (user && user.type === 'admin') {
        return (
            <div className="d-flex flex-wrap justify-content-around mt-4 offset-2">
                {furniture.map((item) => (
                    <div
                        key={item.id_product}
                        className="card mb-4"
                        style={{ width: '200px', height: '250px' }}
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            to={`/catalog/${item.category_product}/${item.product_name}`}
                            onClick={handlerScrollUp}
                        >
                            <img
                                src={config.imgSource + item.product_image}
                                style={{ width: '100%', height: '150px' }}
                            />
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <h5 className="card-title text-center">
                                    {item.product_name}
                                </h5>
                                <Link
                                    to={`/catalog/${item.category_product}/${item.product_name}/editElem`}
                                >
                                    <button
                                        className="btn btn-warning mx-3"
                                        style={{ height: '50px' }}
                                    >
                                        Изменить
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    } else {
        navigate('/');
    }
};
