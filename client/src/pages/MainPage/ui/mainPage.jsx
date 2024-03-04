import { CatalogMainMenu } from '@/entities/catalog/ui/catalogMainMenu';
import { SliderMailFurn } from '@/features/sliderMainFurn/ui/sliderMainFurn';
// import { DiscountFurn } from '@/todo/listFurn/discountFurn';
// import { PopularFurn } from '@/todo/listFurn/popularFurn';
import { Services } from '@/todo/universalComp/services';

export const MainPage = () => {
    // const discountFurn = furniture.filter((u) => u.type === 'discount');
    // const popularFurn = furniture.filter((u) => u.type === 'popular');
    return (
        // discountFurn &&
        // popularFurn && (
        <div className="d-flex flex-column offset-2 p-3">
            <SliderMailFurn />
            <CatalogMainMenu />
            {/* <DiscountFurn value={discountFurn} /> 
                     <PopularFurn value={popularFurn} />  */}
            <Services />
        </div>
        // )
    );
};
