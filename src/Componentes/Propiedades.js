import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>
                {props.porDefecto}
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + "-" + props.objeto.correo}</li>
                <li>{props.elemetoReact}</li>
            </ul>
            </h2>
        </div>
    );
  
}