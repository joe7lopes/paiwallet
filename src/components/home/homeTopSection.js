import React from 'react';

class HomeTopSection extends React.Component {

    componentDidMount() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 l6">
                    <div class="white-text">
                    ss
                    </div>
                </div>
                <div className="col s12 l6">
                    bla
                </div>
            </div>
        );
    }
}

export default HomeTopSection;