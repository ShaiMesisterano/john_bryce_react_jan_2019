// import React, { Component } from 'react';

// class Copyrights extends Component {
//     render() {
//         let { year, company } = this.props;
//         let text = `${year} ${company}`;
//         return (<div>
//         &copy; {text}
//         </div>)
//     }
// }

// export default Copyrights;

import React from 'react';

const Copyrights = ({ year, company }) => {
    let text = `${year} ${company}`;
    return (<div>
    &copy; {text}
    </div>);
}

export default Copyrights;