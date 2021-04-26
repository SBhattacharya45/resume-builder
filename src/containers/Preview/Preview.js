import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
// import ReactToPrint from "react-to-print";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import './Preview.css';

import GetAppIcon from '@material-ui/icons/GetApp';
import InfoIcon from '@material-ui/icons/Info';

// import Page from '../../components/Page/Page';

import EditIcon from '@material-ui/icons/Edit';
// import PrintIcon from '@material-ui/icons/Print';
// import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MyDocument from '../Templates/testTemplate/test';



// import Template1 from '../../components/Templates/Template1/Template1';
// import Template2 from '../../components/Templates/Template2/Template2';

class Preview extends Component {

    editClickedHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/form');
    }

    chooseAnotherTemplate = (event) => {
        event.preventDefault();
        this.props.history.push('/templates')
    }

    render() {

        // let templatePreview = null;
        // switch(this.props.chosenTemplate) {
        //     case 1: templatePreview = <Template1 />
        //     break;
        //     case 2: templatePreview = <Template2 />
        //     break;
        //     default: templatePreview = <Redirect to="/templates"/>
        // }

        return (
            <div>


                <section className="Preview">

                    <div className="noteCard">
                        <InfoIcon style={{marginRight: 10}} />
                        <p> Note: For users on mobile platform please download the pdf from link to preview. </p>
                    </div>

                    <PDFViewer className="viewer">
                        <MyDocument userDetails={this.props.userDetails} />
                    </PDFViewer>
                </section>
                {/* <section  className="Preview">
                    <Page   ref={el => (this.componentRef = el)} templatePreview= {templatePreview} />
                    <div ref={el => (this.componentRef = el)}>
                        {templatePreview}
                    </div>
                </section>*/}

                <div className="buttons">
                    <PDFDownloadLink style={{ textDecoration: 'none' }} document={<MyDocument userDetails={this.props.userDetails} />} fileName="resume.pdf">
                        {({ blob, url, error }) =>
                            <Button variant="contained" color="primary" startIcon={<GetAppIcon />}>
                                Download
                    </Button>
                        }
                    </PDFDownloadLink>

                    <Button variant="outlined" color="primary" onClick={this.editClickedHandler} startIcon={<EditIcon />} >
                        Edit
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