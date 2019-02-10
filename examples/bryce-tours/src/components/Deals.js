import React from 'react';
import Deal from './Deal';

class Deals extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.deals.map( (deal, key) => (
                    <Deal deal={deal} buyDeal={this.buyDeal.bind(this)}>
                        <ul>
                                <li>List Item 1</li>
                                <li>List Item 2</li>
                                <li>List Item 3</li>
                        </ul>
                    </Deal> 
                )
                )}
            </div>
        )
    }
    buyDeal(dealId) {
        this.props.buyDeal(dealId);
    }
}

export default Deals;