import React from "react";
import { Loader } from "../shared/lib/hooks/loader";
export const PageLoader = () => {
    return (
        <div className="pageLoader">
            <Loader />
        </div>
    );
};
