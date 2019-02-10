import * as React from 'react';

export const Article: React.StatelessComponent<{}> = props => (
    <div>
        <h3>{props.title}</h3>
        {props.children}
    </div>
);