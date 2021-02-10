import React, { Fragment } from 'react';

const Multi = (props) => {
    return (
        <Fragment>
            {props.items.map((item, idx) =>
                <Fragment key={item.title}>
                    <p>{item.title}</p>
                    <ul>
                        <li>{item.text}</li>
                    </ul>
                </Fragment>
            )}
        </Fragment>
    );
}

export default Multi;