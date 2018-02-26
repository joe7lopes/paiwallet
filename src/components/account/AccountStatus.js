import React from 'react';
import { connect } from 'react-redux';

const iconsClass = "material-icons large";
const arrowStyle = "material-icons medium";

const getColor = (value) => {
    return value ? "status-completed" : "status-pending";
}

const getAccountStatusMessage = (isPaid) => {
    return isPaid ? "subscription paid": "Missing payment";
}

export const AccountStatus = ({isAccountCreated, isSubscriptionPaid}) => {
    const accountColor = getColor(isAccountCreated);
    const paymentColor = getColor(isSubscriptionPaid);

    const accountStyle = iconsClass + " " + accountColor;
    const accountArrowStyle = arrowStyle + " " + accountColor;
    const paymnetStyle = iconsClass + " " + paymentColor;
    const paymentArrowStyle = arrowStyle + " " + paymentColor;

    const accountStatusMessage = getAccountStatusMessage(isSubscriptionPaid);

    return (
    <div>
        <div className="row center">
            <div className="col s12">
                <i className={accountStyle}>account_box</i>
                <i className={accountArrowStyle}>arrow_forward</i>
                <i className={paymnetStyle}>payment</i>
                <i className={paymentArrowStyle}>arrow_forward</i>
                <i className={paymnetStyle}>assignment_turned_in</i>
                <div>
                    <p>Account status: <span>{accountStatusMessage}</span></p>
                </div>  
            </div>
        </div>
    </div>
)};

const mapStateToProps = (state) => ({
    isAccountCreated: !!state.auth.user,
    isSubscriptionPaid: !!state.auth.user && !!state.auth.user.subscriptionActive
});

export default connect(mapStateToProps) (AccountStatus);