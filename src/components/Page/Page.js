import React, {Component } from 'react'
import './Page.css';

class Page extends Component {

    render(){
        return(
            <div className="page">
                {this.props.templatePreview}
            </div>
        )
    }

}

export default Page;