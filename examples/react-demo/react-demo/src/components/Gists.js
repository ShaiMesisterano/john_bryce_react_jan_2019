import React from 'react';

const Gists = props => (
    <div>
    {
        props.gists.map( (gist, key) => (
            <div key={key}>
                <p>Name: {gist.id}</p>
                <p>Authour: {gist.url}</p>
            </div>
        ) )
    }
        </div>
);

export default Gists;