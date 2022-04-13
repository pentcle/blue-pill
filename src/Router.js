import React from "react";
import {Route, Routes} from "react-router-dom";

import {Main} from "./pages/main";
import BluePill from "./pages/bluePill";
import ImageLib from "./pages/imageLib";

export const Router = () => {
    return (<Routes>
            <Route path="/" element={<Main/>}/>
            <Route path={`/thebluepill`} element={<BluePill/>}/>
            <Route path={`/images`} element={<ImageLib/>}/>
        </Routes>);
};
