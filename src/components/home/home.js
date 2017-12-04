import React from 'react';
import HomeTopSection from './homeTopSection';
import ServicesDescription from './ServicesDescription';

class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeTopSection/>
                <ServicesDescription/>
            </div>
        );
    }
}

export default Home;