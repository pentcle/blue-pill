import React from "react";
import {Route, Routes} from "react-router-dom";

import {Main} from "./pages/main";
import BluePill from "./pages/bluePill";

export const Router = () => {
    return (<Routes>
            <Route path="/" element={<Main/>}/>
            <Route path={`/blue-pill`} element={<BluePill/>}/>
        </Routes>);
};
