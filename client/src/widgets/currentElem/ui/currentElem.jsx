import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData } from '../../../app/store/users';
import { constApi } from '@/shared/const/constApi';
import { addRuble } from '@/shared/utils/addRuble';
// import CategoryUnderItem from '@/todo/listFurn/categoryUnderItem';
import { PageLoader } from '@/pages/PageLoader';
import {
    useDeleteCurrentElemMutation,
    useGetCurrentElemQuery,
} from '../api/currentElemApi';
import { Breadcrumb } from '@/shared/ui/breadCrumb/breadCrumb';

export const CurrentElem = ({ currentElement, currentCategory }) => {
    const user = useSelector(getCurrentUserData());
    const { data, isError, isLoading } = useGetCurrentElemQuery(currentElement);
    const [removeFurn] = useDeleteCurrentElemMutation();
    const handleDelete = (userId) => () => {
        removeFurn(userId);
    };

    if (isError) {
        return <div>error...</div>;
    }
    if (isLoading) {
        return (
            <div className="offset-2 h3 d-flex justify-content-center my-5">
                <PageLoader />
            </div>
        );
    }
    return (
        data && (
            <div className="d-flex flex-column offset-2 col-10 p-3">
                <Breadcrumb
                    currentCategory={currentCategory}
                    currentElement={currentElement}
                />
                <div className="d-flex align-items-center">
                    <h2 className="header-item-slider">
                        {data.product_name_rus}
                    </h2>
                    {user && user.type === 'admin' && (
                        <div>
                            <button
                                onClick={handleDelete(data._id)}
                                className="btn btn-danger"
                                style={{ height: '50px' }}
                            >
                                <a href={`/catalog/${currentCategory}`}>
                                    Удалить
                                </a>
                            </button>
                            <Link
                                to={`/catalog/${currentCategory}/${data.product_name}/editElem`}
                            >
                                <button
                                    className="btn btn-warning mx-3"
                                    style={{ height: '50px' }}
                                >
                                    Изменить
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-start">
                    <div className="col-7">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide d-flex justify-content-center"
                        >
                            <div className="carousel-inner mb-3">
                                {data.product_image.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item${index === 0 ? ' active' : ''}`}
                                    >
                                        <div className="divImgCarousel d-flex justify-content-center align-items-center">
                                            <img
                                                className="imgCarousel"
                                                src={constApi.imgSource + item}
                                                alt={`Фото ${index}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <img
                                src={constApi.imgSource + 'arrow/prev.svg'}
                                className="btn carousel-control-prev arrow-prev-img"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            />
                            <img
                                src={constApi.imgSource + 'arrow/next.svg'}
                                className="btn carousel-control-next arrow-next-img"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            />
                        </div>
                    </div>

                    <div className="right-block-slider d-flex flex-wrap col-xxl-5 ps-2">
                        {data.product_image.map((item, index) => (
                            <div
                                key={index}
                                className="right-block-slider-item d-flex flex-column align-items-center"
                            >
                                <img
                                    src={constApi.imgSource + item}
                                    className="right-block-slider-item-img"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    aria-current="true"
                                    aria-label={`Slide ${index + 1}`}
                                />
                                {
                                    <div className="right-block-slider-item-descr d-flex flex-column align-items-center">
                                        <div>
                                            <strong>
                                                {data.arrDescrImage[index][0]}
                                            </strong>
                                        </div>
                                        {data.arrDescrImage[index][1] && (
                                            <div>
                                                <strong>
                                                    {addRuble(
                                                        data.arrDescrImage[
                                                            index
                                                        ][1],
                                                    )}
                                                </strong>
                                            </div>
                                        )}
                                        {data.arrDescrImage[index][2] && (
                                            <div>
                                                <strong>
                                                    {
                                                        data.arrDescrImage[
                                                            index
                                                        ][2]
                                                    }
                                                </strong>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                {/* <CategoryUnderItem slide={0} /> */}
            </div>
        )
    );
};
