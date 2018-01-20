import React from 'react';

class StocksTable extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>EDP</td>
                        <td>Buy due to bla bla</td>
                    </tr>
                    <tr>
                        <td>SONI</td>
                        <td>buy at $3.76</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StocksTable;