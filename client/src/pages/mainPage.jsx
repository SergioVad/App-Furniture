import { useSelector } from 'react-redux';
import { Loader } from '@/shared/lib/hooks/loader';
import CatalogMainMenu from '@/entities/catalog/ui/catalogMainMenu';
import { getFurniture, getFurnitureLoadingStatus } from '@/app/store/furniture';
import SliderMailFurn from '@/features/sliderMainFurn/ui/sliderMainFurn';
import DiscountFurn from '@/entities/discountFurn';
import PopularFurn from '@/entities/popularFurn';
import Services from '@/entities/services';

const MainPage = () => {
    const furniture = useSelector(getFurniture());
    const loading = useSelector(getFurnitureLoadingStatus());
    if (loading) {
        <Loader />;
    }
    if (!loading && furniture) {
        const discountFurn = furniture.filter((u) => u.type === 'discount');
        const popularFurn = furniture.filter((u) => u.type === 'popular');
        return (
            discountFurn &&
            popularFurn && (
                <div className="d-flex flex-column offset-2 p-3">
                    <SliderMailFurn />
                    <CatalogMainMenu />
                    <DiscountFurn value={discountFurn} />
                    <PopularFurn value={popularFurn} />
                    <Services />
                </div>
            )
        );
    }
};

export default MainPage;
