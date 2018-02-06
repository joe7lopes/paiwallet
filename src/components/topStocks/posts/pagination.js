import React from 'react';

class Pagination extends React.Component {

    handleOnPreviewsPagesClick(){
        const {pages, activePage} = this.props;
        if(activePage == 1){return};
        this.props.previousPageHandler();
    }

    handleOnNextPagesClick(){
        const {pages, activePage} = this.props;
        if(activePage == pages){return};
        this.props.nextPageHandler();
    }

    handleOnPageClick(pageNumber) {
        const {activePage} = this.props;
        if (activePage === pageNumber ) {return};
        this.props.pageHandler(pageNumber);
    }

    renderPageNumbers(){
        const {pages, activePage} = this.props;
        let elements = []
        for(var i = 1; i<= pages; i++){
            let cssClass= (activePage == i) ? "active" : "waves-effect";
            let element =  <li key={i} className={cssClass}><a onClick={this.handleOnPageClick.bind(this, i)}>{i}</a></li>;
            elements.push(element);
        }

        return elements;
    }

    render(){

        const {pages, activePage} = this.props;
        
        let cssFistElement = activePage == 1 ? "disabled" : "waves-effect";
        let cssLastElement = activePage == pages ? "disabled" : "waves-effect";

        return (
            <ul className="pagination">
                <li className={cssFistElement}><a onClick={this.handleOnPreviewsPagesClick.bind(this)}><i className="material-icons">chevron_left</i></a></li>
                {this.renderPageNumbers()}
                <li className={cssLastElement}><a onClick={this.handleOnNextPagesClick.bind(this)}><i className="material-icons">chevron_right</i></a></li>
            </ul>
        );
    }
}

export default Pagination;