import config from '../app/config.json';
import { Link } from 'react-router-dom';
import { addRuble } from '../shared/utils/addRuble';

const DiscountFurn = ({ value }) => {
    return (
        <div>
            <div
                style={{
                    color: '#b91414',
                    fontSize: '2vw',
                    marginTop: '1.5vw',
                    marginBottom: '1vw',
                }}
            >
                Товары со скидкой
            </div>
            <div className="d-flex flex-wrap">
                {value.map((item) => (
                    <div
                        key={item.id_product}
                        className="cardInMainPage card mb-3 me-1"
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
                                        config.imgSource + item.product_image[0]
                                    }
                                />
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
                            </div>
                        </Link>
                        <div className="cardBodyInMainPage card-body">
                            <div className="card-title">
                                <div className="lineHeightInMainPage">
                                    <h4>{addRuble(item.present_price)}</h4>
                                    <s
                                        style={{
                                            color: '#6e6d6d',
                                        }}
                                    >
                                        {addRuble(item.past_price)}
                                    </s>
                                </div>
                            </div>
                            <div className="card-text">{item.product_name}</div>
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
    );
};

export default DiscountFurn;
