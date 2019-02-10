import * as React from 'react';

export const Footer: React.StatelessComponent<{}> = () => {
    const customStyle = {
        backgroundColor: 'darkblue',
        border: 'solid 3px yellow'
    };
    return (
        <div style={customStyle}>
            Footer
    </div>
    );
};