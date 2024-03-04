import { Link } from 'react-router-dom';
import { arrCatalog, rusArrCatalog } from '../../../shared/links';
import { Breadcrumb } from '../../../shared/ui/breadCrumb/breadCrumb';
import { constApi } from '@/shared/const/constApi';

export const Catalog = () => {
    return (
        <div className="offset-2 p-3">
            <h2>Каталог</h2>
            <Breadcrumb />
            <div className="d-flex flex-wrap justify-content-between mt-4">
                {arrCatalog.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'relative',
                            width: '33%',
                        }}
                    >
                        <Link to={`/catalog/${item}`}>
                            <img
                                src={constApi.imgSource + `catalog/${item}.jpg`}
                                className=" text-warning text-center me-1 mb-2"
                                style={{ width: '100%', height: '19vw' }}
                            />
                            <div className="block_catalog">
                                {rusArrCatalog[index]}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
