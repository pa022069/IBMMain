import React from 'react';

const TypeOl = (props) => {
    return (
        <ol>
            {props.items.map((item, idx) => 
                <li key={item}>{item}</li>
            )}
        </ol>
    );
}

export default TypeOl;