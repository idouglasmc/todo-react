import React from "react";

export const FunctionComponent = (props) => {
    const [contador,setContador] = React.useState(0);

    const execute = () => setContador(contador + 1);

    return (
        <button onClick={execute}>
            Contador {contador}
        </button>
    )
}