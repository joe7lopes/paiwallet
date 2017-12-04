import React from 'react';

class HomeTopSection extends React.Component {

    componentDidMount() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }

    render() {
        return (
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br/><br/>
                        <h1 className="header center teal-text text-lighten-2">Pai Wallet</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Analises de investimento</h5>
                        </div>
                        <div className="row center">
                            <a
                                href="#"
                                id="download-button"
                                className="btn-large waves-effect waves-light teal lighten-1">Descubra a sua carteira ideal</a>
                        </div>
                        <br/><br/>

                    </div>
                </div>
                <div className="parallax">
                    <img src={require('../../images/wallstSmall.png')}/>
                </div>
            </div>
        );
    }
}

export default HomeTopSection;