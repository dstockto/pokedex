import React from 'react';

const Selected = ({pokemon}) => {
    let { name, weight, height, sprites } = pokemon;
    return (
        <div>
            <h3>{name}</h3>
            ----------------- 
            <br/>
            <img src={sprites.front_default} alt={`${name} default image`} />
            <br/>
            weight: {weight}
            <br/>
            height: {height}
            <br/>
        </div>
    );
}

export default Selected; 