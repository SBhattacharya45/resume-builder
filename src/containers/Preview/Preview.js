import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import ReactToPrint from "react-to-print";
import './Preview.css';

import Page from '../../components/Page/Page';

import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';


import Template1 from '../../components/Templates/Template1/Template1';
//import Template2 from '../../components/Templates/Template2/Template2';

class Preview extends Component {

    render(){

        const templatePreview = <Template1 />;

        return(
            <div>
                <h1> This is Preview Container</h1>
                <Page ref={el => (this.componentRef = el)} templatePreview= {templatePreview} />
                <div className="buttons">
                    <Button variant="contained" color="primary">
                        <ReactToPrint
                        trigger={() => <span className="print"> <PrintIcon/> Print</span>}
                        content={() => this.componentRef}
                        />
                    </Button>
                    <Button variant="outlined" color="primary" hred="/templates">
                       <ViewCompactIcon/> Choose another Template
                    </Button>
                    <NavLink to='/form'>
                        <Button variant="outlined" color="primary">
                        <EditIcon/> Edit
                        </Button>
                    </NavLink>
                </div>
                <div>

                </div>
                
                    
            </div>
        )
    }
}

export default Preview;