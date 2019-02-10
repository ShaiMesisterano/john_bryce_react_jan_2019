import React from 'react';

const Users = props => {
    return (
    <div>
    {
         props.users.map( (user, key) => (
             <div key={key}>
                 <a href={user.html_url}>
                    {user.name}
                 </a>
             </div>
         ) )
    }
        </div>
    )
};

export default Users;