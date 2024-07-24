import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function LayOut() {
    return (
        <div>
        <Header />
        <Outlet />
        </div>
    )
}

export default LayOut;