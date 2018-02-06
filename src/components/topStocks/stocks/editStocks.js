import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import StocksTable from './stocks_table';
import { startAddStockAdvise } from '../../../actions/stocks_action';

class EditStocks extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        const stockAdvise = {
            adviseType: "buy",
            name: "edp",
            comment: "buy strong"
        }

        this.props.startAddStockAdvise(stockAdvise);
    }

    render(){
            const { handleSubmit, reset } = this.props;
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
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Advise type</label>
                        <select name="adviseType" className="browser-default" style={{color:"black"}} required>
                            <option></option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                        <input type="text" name="name" placeholder="company name" required style={titleStyle}/>
                        <textarea style={textAreaStyle} name="comment" placeholder="comment" required/>
                        <input type="reset" className="waves-effect waves-light btn blue" style={{marginRight: "10px"}} value="Cancel" onClick={reset}/>
                        <input type="submit" className="waves-effect waves-light btn" value="Create"/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddStockAdvise: (stockAdvise) => dispatch(startAddStockAdvise(stockAdvise))
});

// EditStocks = reduxForm({
//     form: 'addStockAdviseForm'
// })(
//     connect(undefined,mapDispatchToProps) (EditStocks)
// );

export default connect(undefined, mapDispatchToProps)(EditStocks);