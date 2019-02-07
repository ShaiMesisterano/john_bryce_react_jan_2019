import React from 'react';
import Menu from './Menu';
import Deals from './Deals';
import About from './pages/About';
import Contact from './pages/Contact';

class Main extends React.Component {
    state = {
        page: 'Home'
    }
    render() {
        let { src, title } = this.props.mainImage;
        // let content = null;
        // if (this.state.page === 'Home') {
        //     content = <Deals deals={this.props.deals} buyDeal={this.buyDeal.bind(this)} />
        // }
        // else if (this.state.page === 'About') {
        //     content = <About />
        // }
        // else if (this.state.page === 'Contact') {
        //     content = <Contact />
        // }
        return (
            <div className="col-sm-12">
                <div className="row">
                    <Menu listOfItems={['Home', 'About', 'Contact']} navigate={this.navigate.bind(this)} />
                </div>

                <div className="row">
                    <img src={src} title={title} className="col-sm-12" />
                </div>

                <div className="row">
                    {( () => {
                        switch (this.state.page) {
                                case 'Home':
                                    return <Deals deals={this.props.deals} buyDeal={this.buyDeal.bind(this)} />
                                case 'About':
                                    return <About />
                                case 'Contact':
                                    return <Contact />
                        }
                    })()}
                </div>
            </div>
        )
    }
    navigate(item) {
        this.setState( {
            page: item
        } );
    }
    buyDeal(dealId) {
        this.props.buyDeal(dealId);
    }
}

export default Main;