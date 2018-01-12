import React from 'react';
import Footer from './footer';

class Home extends React.Component {

    render() {
        return (
            <div>
                <section>
                    <div className="home-container">
                        <div className="row container">
                            <div className="col s6">
                                <h1> PaiWallet</h1>
                                <h3>Fundos de investimento</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus obcaecati. Ipsam rem commodi reiciendis unde cupiditate, iure tempora consequuntur tempore quas ut aperiam nulla quod adipisci provident eligendi qui.</p>
                                <div className="col s6">
                                    <a class="waves-effect waves-light btn-large"><i class="material-icons left">system_update</i>Apps Store</a>
                                </div>
                                <div className="col s6">
                                    <a class="waves-effect waves-light btn-large"><i class="material-icons left">adb</i>Play Store</a>
                                </div>
                            </div>
                            <div className="col s6 center">
                                signup
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Home;