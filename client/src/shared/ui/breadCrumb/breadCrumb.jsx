import { Link } from 'react-router-dom';

export const Breadcrumb = ({ currentElement, currentCategory }) => {
    const main = <Link to={`/`}>Главная страница</Link>;
    const catalog = <Link to={'/catalog'}>Каталог</Link>;
    const category = (
        <Link to={`/catalog/${currentCategory}`}>{currentCategory}</Link>
    );
    if (!currentElement) {
        return (
            <div className="d-flex">
                {main}/{catalog}/{linkcurrentCategory}
            </div>
        );
    }
    const linkcurrentCategory = (
        <Link to={`/${currentCategory}`}>{currentCategory}</Link>
    );
    return (
        <div className="d-flex">
            {main}/{catalog}/{category}/{currentElement}
        </div>
    );
};
