import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import StocksTable from './stocks_table';
import { addStockAdvise } from '../../../actions/stocks_action';

let EditStocks = props => {
    const { handleSubmit, reset } = props;
    const textAreaStyle = {
        backgroundColor: "white",
        color:"black",
        borderRadius: "5px",
        height:"100px"
    }

    const titleStyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "5px"
    }

    return(
        <div>
            <div className="pai-container orange lighten-1">
                <form onSubmit={handleSubmit(addStockAdvise)}>
                    <label>Advise type</label>
                    <Field name="adviseType" component="select" className="browser-default" style={{color:"black"}} required>
                        <option></option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </Field>
                    <Field component="input" type="text" name="name" placeholder="company name" required style={titleStyle}/>
                    <Field style={textAreaStyle} component="textarea" name="comment" placeholder="comment" required/>
                    <input type="reset" className="waves-effect waves-light btn blue" style={{marginRight: "10px"}} value="Cancel" onClick={reset}/>
                    <input type="submit" className="waves-effect waves-light btn" value="Create"/>
                </form>
            </div>
        </div>
    );
   
}

const mapDispatchToProps = (dispatch) => ({
    addStockAdvise: (stock) => dispatch(addStockAdvise(stock))
});

EditStocks = reduxForm({
    form: 'addStockAdviseForm'
})(
    connect(null,mapDispatchToProps) (EditStocks)
);

export default EditStocks;