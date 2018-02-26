import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { startAddStockAdvise } from '../../actions/stocks_action';

class CreateStock extends React.Component {

    onSubmit = (data) =>{
        if(!data.adviseType){
            data.adviseType = 'buy';
        }
        this.props.startAddStockAdvise(data);
    }

    render(){
            const { startAddStockAdvise, handleSubmit, reset, pristine, submitting } = this.props;
            const textAreaStyle = {
                height:"100px"
            }
        return(
            <div>
                <div>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <label>Advise type</label>
                        <Field component="select"
                            name="adviseType"
                            className="browser-default"
                            >
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                        </Field>
                        <Field component="input" type="text" name="name" placeholder="company name" required/>
                        <Field component="textarea" style={textAreaStyle} name="comment" placeholder="comment" required/>
                        <button type="button" className="waves-effect waves-light btn blue" style={{marginRight: "10px"}} onClick={reset}>
                            Cancel
                        </button>
                        <button type="submit" className="waves-effect waves-light btn" disabled={pristine || submitting}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const afterSubmit = (result, dispatch) =>{
    dispatch(reset('addStockAdviseForm'));
};

const mapDispatchToProps = (dispatch) => ({
    startAddStockAdvise: (stockAdvise) => dispatch(startAddStockAdvise(stockAdvise))
});

CreateStock = reduxForm({
    form: 'addStockAdviseForm',
    onSubmitSuccess: afterSubmit,
    
})(
    connect(undefined,mapDispatchToProps) (CreateStock)
);

export default CreateStock;