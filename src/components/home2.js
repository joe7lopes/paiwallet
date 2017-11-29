import React from 'react';
import TopStocksPerformance from './topStocksPerformance';

class Home extends React.Component {

    render() {
        return (
            <div>
               <TopStocksPerformance/>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Tweets</p>
                                        <p className="title">3,456</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Following</p>
                                        <p className="title">123</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Followers</p>
                                        <p className="title">456K</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Likes</p>
                                        <p className="title">789</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;