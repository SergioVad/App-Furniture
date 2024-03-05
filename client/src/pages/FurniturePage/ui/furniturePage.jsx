import { Catalog } from '@/entities/catalog/ui/catalog';
import { CurrentCategory } from '@/features/currentCategory/ui/currentCategory';
import { CurrentElem } from '@/widgets/currentElem/ui/currentElem';
import { useParams } from 'react-router-dom';

// import { getArrayByName } from '@/app/store/furniture';
// import { useSearchElem } from '@/shared/lib/hooks/useSearchElem';

export const FurniturePage = () => {
    const { currentCategory, currentElement } = useParams();
    // const { valueSearch } = useSearchElem();
    // const valueSearchFurniture = useSelector(getArrayByName(valueSearch));
    return (
        <>
            {currentElement ? (
                <CurrentElem />
            ) : currentCategory ? (
                <CurrentCategory value={currentCategory} />
            ) : (
                <Catalog />
            )}
        </>
    );
};
