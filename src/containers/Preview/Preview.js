import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter, Redirect} from 'react-router';
import Button from '@material-ui/core/Button';
import ReactToPrint from "react-to-print";
import './Preview.css';

import Page from '../../components/Page/Page';

import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';



import Template1 from '../../components/Templates/Template1/Template1';
import Template2 from '../../components/Templates/Template2/Template2';

class Preview extends Component {
    
    editClickedHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/form');
    }

    render(){

        let templatePreview = null;
        switch(this.props.chosenTemplate) {
            case 1: templatePreview = <Template1 />
            break;
            case 2: templatePreview = <Template2 />
            break;
            default: templatePreview = <Redirect to="/templates"/>
        }

        return(
            <div>
                
                <h1> This is Preview Container</h1>
                <section  className="Preview">
                    <Page   ref={el => (this.componentRef = el)} templatePreview= {templatePreview} />

                </section>
                <div className="buttons">
                    <Button variant="contained" color="primary">
                        <ReactToPrint
                        trigger={() => <span className="print"> <PrintIcon/> Print</span>}
                        content={() => this.componentRef}
                        pageStyle='@page { size: auto; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; margin-top: -15px !important; border: 0px solid transparent !important; outline: none !important;} }'
                        />
                    </Button>
                    <Button variant="outlined" color="primary" hred="/templates">
                       <ViewCompactIcon/> Choose another Template
                    </Button>

                    <Button variant="outlined" color="primary" onClick={this.editClickedHandler} >
                    <EditIcon/> Edit
                    </Button>
                </div>
                <div>

                </div>
                
                    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chosenTemplate: state.template.templateId
    };
  }

export default connect(mapStateToProps, null)(withRouter(Preview));