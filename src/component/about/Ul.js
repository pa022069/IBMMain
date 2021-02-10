import React, { Fragment } from 'react';

const TypeUl = (props) => {
    return (
        <Fragment>
            <ul>
                {props.items.map((item, idx) =>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </Fragment>
    );
}

export default TypeUl;