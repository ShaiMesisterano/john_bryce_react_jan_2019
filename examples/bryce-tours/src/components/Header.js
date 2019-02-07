import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron col-sm-12">
                <h1 className="display-4">
                    {this.props.title}
                </h1>
                <p className="lead">
                    The best deals can be found here!
                </p>
            </div>
        )
    }
}

export default Header;