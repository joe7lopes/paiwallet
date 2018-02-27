import React from 'react';
import SubscriptionStandard from './subscription_standard';
import Signup from '../auth/signup';

class Subscription extends React.Component{

    render(){
        return(
            <section>
                <div className="pai-wallet-background">
                    <div className="container">
                        <div className="row">
                            <div className="col m12">
                                <h1>Subscription</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sed fugit. Autem similique natus ipsa, odio, deserunt numquam maxime, officia expedita impedit quasi quae. Quis, illum expedita? Tempora, autem voluptatem.</p>
                                <div className="col m6">
                                    <SubscriptionStandard/>
                                </div>
                                <div className="col m6">
                                    <Signup/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscription;