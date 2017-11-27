import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Home</h1>
                        <h2 className="subtitle">Nov 27 - Close</h2>

                        <div className="tile is-ancestor">
                            <div className="tile is-4 is-vertical is-parent">
                                <div className="tile is-child box">
                                    <p className="title">PSI20 +1%</p>
                                </div>
                                <div className="tile is-child box">
                                    <p className="title">TOP STOCKS +20%</p>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <p className="title">GRAPH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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