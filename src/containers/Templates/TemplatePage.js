import React from "react";
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import "./TemplatePage.css"
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card/Card';
import * as actions from '../../store/actions/index';



const TemplatePage = (props) => {

  const templateSelectHandler = (id) => {
    props.onChoice(id);
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={4} >
          <Card
          templateId={1}
          clicked={templateSelectHandler} 
          templateLink="/preview"
          imageLink="https://img.freepik.com/free-vector/young-people-jumping-together-illustration_52683-27019.jpg?size=626&ext=jpg"
          title="Template 1"
          cardTitle="Template 1"
          description="This is a card element"/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} >
          <Card 
          templateId={2}
          clicked={templateSelectHandler} 
          templateLink="/preview"
          imageLink="https://img.freepik.com/free-vector/young-people-jumping-together-illustration_52683-27019.jpg?size=626&ext=jpg"
          title="Template 2"
          cardTitle="Template 2"
          description="This is a card element"/>
        </Grid>
      </Grid>
    </div>
  );    
  
};

const mapDispatchToProps = dispatch => {
  return {
      onChoice: (id) => dispatch(actions.changeTemplate(id))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(TemplatePage));
