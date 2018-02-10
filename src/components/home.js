import React from 'react';
import Login from './auth/login';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
                <section>
                    <div>
                        <div className="row container">
                            <div className="col l6">
                                <h1>Fundos de investimento</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus obcaecati. Ipsam rem commodi reiciendis unde cupiditate, iure tempora consequuntur tempore quas ut aperiam nulla quod adipisci provident eligendi qui.</p>
                                <Link className="waves-effect waves-light btn-large subscribe-button" to="/subscription"><i className="material-icons left">system_update</i>Subscribe</Link>
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