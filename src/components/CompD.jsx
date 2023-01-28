import React from "react";
import { CountContext } from "../contexts";

export const CompD = (props) => {

    const countContextValue = React.useContext(CountContext);

    return <div>
        CompD
        <p>Count: {countContextValue.count}</p>
    </div>
}