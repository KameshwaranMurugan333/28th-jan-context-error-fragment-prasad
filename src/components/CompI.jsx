import React from "react";
import { CountContext } from "../contexts";

export const CompI = (props) => {

    const countContextValues = React.useContext(CountContext);

    return <div>
        CompI
        <p>Count: {countContextValues.count}</p>
        <button onClick={countContextValues.increment}>+</button>
    </div>
}