import { useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getCurrentUserData } from '../../../app/store/users';
import { arrCatalog, rusArrCatalog } from '../../../shared/links';
import { addRuble } from '../../../shared/utils/addRuble';
import { PageLoader } from '@/pages/PageLoader/ui/pageLoader';
import { Breadcrumb } from '../../../shared/ui/breadCrumb/breadCrumb';
import { constApi } from '@/shared/const/constApi';
import { useCurrentCategoryQuery } from '../api/currentCategoryApi';

const CurrentCategory = ({ value }) => {
    let [searchParams] = useSearchParams();
    const user = useSelector(getCurrentUserData());
    const name = searchParams.get('name');
    const {
        isError,
        isLoading,
        data: category,
    } = useCurrentCategoryQuery({ value, name });
    const { currentCategory } = useParams();
    const categoryIndex = arrCatalog.findIndex(
        (item) => item === currentCategory,
    );
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
        <div className="d-flex">
            <div className="d-flex flex-column offset-2 col-10 p-3">
                <Breadcrumb currentCategory={currentCategory} />
                <div className="d-flex align-items-center">
                    {currentCategory !== 'search' ? (
                        <h2 className="me-4">{rusArrCatalog[categoryIndex]}</h2>
                    ) : (
                        <h2 className="me-4">Найденные товары</h2>
                    )}

                    {user && user.type === 'admin' && (
                        <Link to="/product-change">
                            <button className="btn btn-primary">
                                Добавить
                            </button>
                        </Link>
                    )}
                </div>
                <div className="d-flex flex-wrap mt-4">
                    {category.map((item) => (
                        <div
                            key={item.id_product}
                            className="cardInMainPage card mb-4"
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                                to={`/catalog/${item.category_product}/${item.product_name}`}
                            >
                                <div>
                                    <img
                                        className="cardImgInMainPage"
                                        src={
                                            constApi.imgSource +
                                            item.product_image[0]
                                        }
                                    />
                                    {item.type === 'discount' && (
                                        <div className="discountValue">
                                            <span
                                                style={{
                                                    color: '#cd0404',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                -50%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <div className="cardBodyInMainPage card-body">
                                <div className="card-title">
                                    <div className="lineHeightInMainPage">
                                        <h4>{addRuble(item.present_price)}</h4>
                                        {item.type === 'discount' && (
                                            <s
                                                style={{
                                                    color: '#6e6d6d',
                                                }}
                                            >
                                                {addRuble(item.past_price)}
                                            </s>
                                        )}
                                    </div>
                                </div>
                                <div className="card-text">
                                    {item.product_name_rus}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                        to={`/catalog/${item.category_product}/${item.product_name}`}
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentCategory;
