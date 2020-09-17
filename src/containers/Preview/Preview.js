import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ReactToPrint from "react-to-print";
import './Preview.css';

import Page from '../../components/Page/Page';

//import Template1 from '../../components/Templates/Template1/Template1';
import Template2 from '../../components/Templates/Template2/Template2';

class Preview extends Component {

    render(){

        const templatePreview = <Template2 />;

        return(
            <div>
                <h1> This is Preview Container</h1>
                <Page ref={el => (this.componentRef = el)} templatePreview= {templatePreview} />
                <div className="buttons">
                    <Button variant="contained" color="primary">
                        <ReactToPrint
                        trigger={() => <span>Print</span>}
                        content={() => this.componentRef}
                        />
                    </Button>
                    <Button variant="outlined" color="primary">
                        Choose another Template
                    </Button>
                </div>
                <div>

                </div>
                
                    
            </div>
        )
    }
}

export default Preview;