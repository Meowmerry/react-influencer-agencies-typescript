import React from "react";
import {useCounter} from "../store/useCounter";


const DisplayCount: React.FC = ():JSX.Element => {
    const {count} = useCounter()
    return (
        <div>Count: {count}</div>
    )
}
export default DisplayCount;