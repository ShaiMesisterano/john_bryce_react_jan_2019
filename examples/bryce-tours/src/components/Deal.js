import React from 'react';

class Deal extends React.Component {
    state = {
        timer: this.props.deal.endsIn
    }
    componentDidMount() {
        this.startCountDown();
    }
    startCountDown() {
        const countdown = () => {
            if (this.state.timer > 0) {
                this.setState( (prevState) => ({
                    timer: --prevState.timer
                }) );
            }
            else {
                clearInterval(this.timerInterval);
            }
        }
        this.timerInterval = setInterval(countdown , 1000);
    }
    render() {
        let { to, image, numOfBuyers, id } = this.props.deal;
        return (
            <div className="col-sm-3">
                <h1>{to}</h1>
                <h5>Ends in {this.state.timer} seconds</h5>
                <img src={image} width="200" />
                <button onClick={this.BuyDeal.bind(this, id)} className="btn btn-primary">Buy Now</button>
                <h5>Number of buyers: {numOfBuyers}</h5>
            </div>
        )
    }
    BuyDeal(dealId) {
        this.props.buyDeal(dealId);
    }
    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }
}

export default Deal;