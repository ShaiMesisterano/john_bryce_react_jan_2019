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
import PropTypes from 'prop-types';

const Copyrights = ({ year, company }) => {
    let text = `${year} ${company}`;
    return (<div>
    &copy; {text}
    </div>);
}

Copyrights.propTypes = {
    year: PropTypes.number,
    company: PropTypes.string
  }

export default Copyrights;