import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter, Redirect} from 'react-router';
import Button from '@material-ui/core/Button';
import ReactToPrint from "react-to-print";
import { PDFViewer } from '@react-pdf/renderer';
import './Preview.css';

import Page from '../../components/Page/Page';

import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MyDocument from '../Templates/testTemplate/test';



import Template1 from '../../components/Templates/Template1/Template1';
import Template2 from '../../components/Templates/Template2/Template2';

class Preview extends Component {
    
    editClickedHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/form');
    }

    chooseAnotherTemplate = (event) => {
        event.preventDefault();
        this.props.history.push('/templates')
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
                <section className="Preview">
                    <PDFViewer className="viewer">
                        <MyDocument userDetails={this.props.userDetails}/>
                    </PDFViewer>    
                </section>            
                {/* <section  className="Preview">
                    <Page   ref={el => (this.componentRef = el)} templatePreview= {templatePreview} />
                    <div ref={el => (this.componentRef = el)}>
                        {templatePreview}
                    </div>
                </section>*/}
                
                <div className="buttons">
                    <Button variant="contained" color="primary">
                        <ReactToPrint
                        trigger={() => <span className="print"> <PrintIcon/> Print</span>}
                        content={() => this.componentRef}
                        pageStyle='@page { size: auto; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; margin-top: -15px !important; border: 0px solid transparent !important; outline: none !important;} }'
                        />
                    </Button>
                    <Button variant="outlined" color="primary"  onClick={this.chooseAnotherTemplate}>
                       <ViewCompactIcon/> Choose another Template
                    </Button>

                    <Button variant="outlined" color="primary" onClick={this.editClickedHandler} >
                    <EditIcon/> Edit
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chosenTemplate: state.template.templateId,
        userDetails: state.form.details
    };
  }

export default connect(mapStateToProps, null)(withRouter(Preview));