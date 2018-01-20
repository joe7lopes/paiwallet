import React from 'react';
import Login from './auth/login';

class Home extends React.Component {

    render() {
        return (
                <section>
                    <div>
                        <div className="row container">
                            <div className="col l6">
                                <h1>Fundos de investimento</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus obcaecati. Ipsam rem commodi reiciendis unde cupiditate, iure tempora consequuntur tempore quas ut aperiam nulla quod adipisci provident eligendi qui.</p>
                                <a className="waves-effect waves-light btn-large subscribe-button"><i className="material-icons left">system_update</i>Subscribe</a>
                                <div className="row">
                                    <div className="col l6">
                                        <a className="waves-effect waves-light btn-large"><i className="material-icons left">system_update</i>Apps Store</a>
                                    </div>
                                    <div className="col l6">
                                        <a className="waves-effect waves-light btn-large"><i className="material-icons left">adb</i>Play Store</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col l6 center login-section">
                                <h4>Access our TOP 10 stocks</h4>
                                <Login/>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Home;