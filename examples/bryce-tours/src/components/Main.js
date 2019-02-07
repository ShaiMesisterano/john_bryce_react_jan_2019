import React from 'react';
import Menu from './Menu';
import Deal from './Deal';

class Main extends React.Component {
    // constructor() {
    //     this.state = {
    //         timer: 60
    //     }
    // }
    // constructor() {
    //     super();
    //     this.startCountDown();
    // }
    state = {
        timer: 60
    }
    render() {
        let { src, title } = this.props.mainImage;
        return (
            <div className="col-sm-12">
                <div className="row">
                    <Menu listOfItems={['Home', 'About', 'Contact']} />
                </div>

                <div className="row">
                    <img src={src} title={title} className="col-sm-12" />
                </div>

                <div className="row">
                    {/* <h1>
                        Time until this deal ends: {this.state.timer}
                    </h1> */}
                    {this.props.deals.map( (deal, key) => <Deal deal={deal} buyDeal={this.buyDeal.bind(this)} /> )}
                </div>
            </div>
        )
    }
    buyDeal(dealId) {
        this.props.buyDeal(dealId);
    }
    startCountDown = ( () => {
        setInterval(() => {
            if (this.state.timer > 0) {
                // let updatedTimer = this.state.timer;
                // updatedTimer = updatedTimer - 1;
                // this.setState({
                //     timer: updatedTimer
                // });
                this.setState( (prevState) => ({
                    timer: prevState.timer - 1
                }) );
            }
        }, 1000)
    })();
}

export default Main;