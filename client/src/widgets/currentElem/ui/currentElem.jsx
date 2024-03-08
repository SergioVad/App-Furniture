import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { deleteFurniture } from '../../../app/store/furniture';
import { getCurrentUserData } from '../../../app/store/users';
import { constApi } from '@/shared/const/constApi';
import { addRuble } from '@/shared/utils/addRuble';
import { Breadcrumb } from '../../../shared/ui/breadCrumb/breadCrumb';
// import CategoryUnderItem from '@/todo/listFurn/categoryUnderItem';
import { useCurrentCategoryQuery } from '@/features/currentCategory/api/currentCategoryApi';
import { PageLoader } from '@/pages/PageLoader';

export const CurrentElem = ({ value }) => {
    const { currentElement, currentCategory } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(getCurrentUserData());
    const { data, isError, isLoading } = useCurrentCategoryQuery({ value });
    const furnitureByName = data
        ? Object.values(data)
              .filter((item) => item.product_name === currentElement)
              .shift()
        : undefined;
    console.log('data', data);
    const handleDelete = (userId) => {
        dispatch(deleteFurniture(userId));
        <Navigate to={`/catalog/${currentCategory}`} replace />;
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
        furnitureByName && (
            <div className="d-flex flex-column offset-2 col-10 p-3">
                <Breadcrumb
                    currentCategory={currentCategory}
                    currentElement={currentElement}
                />
                {console.log(
                    'furnitureByName.product_name_rus',
                    furnitureByName.product_name_rus,
                )}
                <div className="d-flex align-items-center">
                    <h2 className="header-item-slider">
                        {furnitureByName.product_name_rus}
                    </h2>
                    {user && user.type === 'admin' && (
                        <div>
                            <button
                                onClick={() =>
                                    handleDelete(furnitureByName._id)
                                }
                                className="btn btn-danger"
                                style={{ height: '50px' }}
                            >
                                Удалить
                            </button>
                            <Link
                                to={`/catalog/${currentCategory}/${furnitureByName.product_name}/editElem`}
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
                                {furnitureByName.product_image.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item${index === 0 ? ' active' : ''}`}
                                        >
                                            <div className="divImgCarousel d-flex justify-content-center align-items-center">
                                                <img
                                                    className="imgCarousel"
                                                    src={
                                                        constApi.imgSource +
                                                        item
                                                    }
                                                    alt={`Фото ${index}`}
                                                />
                                            </div>
                                        </div>
                                    ),
                                )}
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
                        {furnitureByName.product_image.map((item, index) => (
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
                                                {
                                                    furnitureByName
                                                        .arrDescrImage[index][0]
                                                }
                                            </strong>
                                        </div>
                                        {furnitureByName.arrDescrImage[
                                            index
                                        ][1] && (
                                            <div>
                                                <strong>
                                                    {addRuble(
                                                        furnitureByName
                                                            .arrDescrImage[
                                                            index
                                                        ][1],
                                                    )}
                                                </strong>
                                            </div>
                                        )}
                                        {furnitureByName.arrDescrImage[
                                            index
                                        ][2] && (
                                            <div>
                                                <strong>
                                                    {
                                                        furnitureByName
                                                            .arrDescrImage[
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
