import { useNavigate } from 'react-router-dom';
import { Links } from '@/shared/links';

export const Sidebar = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.searchFurn.value.trim();
        let trueValue;
        if (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] === ' ') {
                    value[i + 1] = value[i + 1].toUpperCase();
                }
            }
            trueValue = value[0].toUpperCase() + value.slice(1).toLowerCase();
            navigate(`/catalog/search?name=${trueValue}`);
            e.target.searchFurn.value = '';
        }
    };
    return (
        <aside
            className="navMenu-width position-fixed bg-white h-100"
            style={{ position: 'absolute', zIndex: '100' }}
        >
            <div className="">
                {/* <div className="div-town h6 mb-4">Город Черкесск</div> */}
                {/* <div
                    style={{ fontSize: "1.3vw" }}
                    className="fw-bold fst-italic"
                >
                    8-964-042-14-85
                </div> */}
            </div>
            <div className="mb-3">
                <a href="/" className="name-furn">
                    Mebel Luxury
                </a>
            </div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="input-find-furn form-control mr-sm-2 mb-2"
                    type="search"
                    name="searchFurn"
                    aria-label="Search"
                />
                <button className="button-find-furn btn btn-outline-success my-sm-0 d-flex justify-content-center align-items-center">
                    Поиск
                </button>
            </form>
            <ul className="nav flex-column mt-4">
                <Links />
            </ul>
        </aside>
    );
};
