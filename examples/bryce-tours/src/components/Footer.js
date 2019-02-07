import React from 'react';

// export function Footer() {
//     return (
//         <h1>Footer</h1>
//     )
// }

// const Footer = () => (
//     <h1>Footer</h1>
// );

const Footer = ({ copy }) => {
    return (
        <div className="col-sm-12">
            <p>
                { copy }
            </p>
        </div>
    );
}

export default Footer;

// export function Copyrights() {
//     return (
//         <span>&copy; 2019</span>
//     )
// }