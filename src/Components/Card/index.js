import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";

function Card(props){
     const {key, img, name } = props; 

    return(
        <Link to={`/personagem/${id}`} className="card">
            <img src={img} alt={name} />
            <p>{name}</p>
            {console.log(id)}
        </Link>
    );
}

export default Card; 