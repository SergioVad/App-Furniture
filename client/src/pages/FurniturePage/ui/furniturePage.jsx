import { Catalog } from '@/entities/catalog/ui/catalog';
import { CurrentCategoryAsync } from '@/features/currentCategory';
import { PageLoader } from '@/pages/PageLoader';
import { CurrentElem } from '@/widgets/currentElem/ui/currentElem';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

export const FurniturePage = () => {
    const { currentCategory, currentElement } = useParams();
    return (
        <>
            {currentElement && currentCategory ? (
                <CurrentElem />
            ) : currentCategory ? (
                <Suspense fallback={<PageLoader />}>
                    <CurrentCategoryAsync value={currentCategory} />
                </Suspense>
            ) : (
                <Catalog />
            )}
        </>
    );
};
