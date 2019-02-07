import React from 'react';
import Deal from './Deal';

class Deals extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.deals.map( (deal, key) => <Deal deal={deal} buyDeal={this.buyDeal.bind(this)} /> )}
            </div>
        )
    }
    buyDeal(dealId) {
        this.props.buyDeal(dealId);
    }
}

export default Deals;