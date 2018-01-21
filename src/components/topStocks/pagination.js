import React from 'react';

class Pagination extends React.Component {

    handleOnPreviewsPagesClick(){
        const {numberOfPages, activePage} = this.props;
        if(activePage == 1){return}
        console.log("previous page clicked");
    }

    handleOnNextPagesClick(){
        const {numberOfPages, activePage} = this.props;
        if(activePage == numberOfPages){return}
        console.log("Next page clicked");
    }

    render(){

        const {numberOfPages, activePage} = this.props;

        let pages = []
        for(var i = 1; i<= numberOfPages; i++){
            let cssClass= (activePage == i) ? "active" : "waves-effect";
            let element =  <li key={i} className={cssClass}><a href="#!">{i}</a></li>;
            pages.push(element);
        }
        let cssFistElement = activePage == 1 ? "disabled" : "waves-effect";
        let cssLastElement = activePage == numberOfPages ? "disabled" : "waves-effect";

        return (
            <ul className="pagination">
                <li className={cssFistElement}><a onClick={this.handleOnPreviewsPagesClick.bind(this)}><i className="material-icons">chevron_left</i></a></li>
                {pages}
                <li className={cssLastElement}><a onClick={this.handleOnNextPagesClick.bind(this)}><i className="material-icons">chevron_right</i></a></li>
            </ul>
        );
    }
}

export default Pagination;