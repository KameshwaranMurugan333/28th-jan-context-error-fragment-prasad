import React from "react";
import { CompB } from "./CompB";
import { CompC } from "./CompC";
import { CountContext } from '../contexts';

export const CompA = (props) => {

    const [count, setCount] = React.useState(0);

    const increment = () => {
        // setCount(count + 1);
        setCount({ name: "name" })
    }

    return <CountContext.Provider value={{ count, increment }}>
        <div>
            CompA
            <CompB />
            <CompC />
        </div>
    </CountContext.Provider>
}