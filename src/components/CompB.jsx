import React from "react";
import { CompD } from "./CompD";
import { CompE } from "./CompE";

export const CompB = (props) => {
    return <>
        <p>CompB</p>
        <CompD />
        <CompE />
    </>
}