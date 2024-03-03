import _ from 'lodash';

export const Pagination = ({
    itemsCount,
    pageSize,
    currentPage,
    onPageChange,
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li
                            className={
                                'page-item' +
                                (page === currentPage ? ' active' : '')
                            }
                            key={'_page' + page}
                        >
                            <button
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
