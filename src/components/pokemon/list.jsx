import React from 'react';
import uuid from 'uuid';

const List = ({source, handleClick}) => {
    let s = source || [];
    return (
        <ul>
            {s.map(pokemon => {
                return (
                    <li key={uuid.v1()}
                        onClick={() => { handleClick(pokemon.url) } }
                    >
                        {pokemon.name}
                    </li>
                );
            })}
        </ul>
    );
}

export default List;
