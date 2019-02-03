import React, {Component} from 'react';

class Deals extends Component {
    render() {
        const allDeals = this.props.deals.map( deal => (
            <div>
                <div>{deal.to}</div>
                <div>{deal.endIn}</div>
                <img src={deal.image} />
            </div>)
        );
        return <div>{allDeals}</div>
    }
}

export default Deals;
