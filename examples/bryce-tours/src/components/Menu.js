import React from 'react';

class Menu extends React.Component {
    render() {
        let { listOfItems } = this.props;
        return (
            <ul className="nav justify-content-center">
                {listOfItems.map((item, key) => <li key={key} className="nav-item"><a className="nav-link active" href="#" onClick={this.props.navigate.bind(this,item)}>{item}</a></li>)}
            </ul>
        )
    }
}

export default Menu;