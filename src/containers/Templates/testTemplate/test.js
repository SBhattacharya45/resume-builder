import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Image } from '@react-pdf/renderer';
import './test.css';
// import locationIcon from '../../../assets/icons/location.svg';
// import emailIcon from '../../../assets/icons/email.svg';
// import linkedInIcon from '../../../assets/icons/linkedin.svg';
// import githubIcon from '../../../assets/icons/github.svg';




// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'whitesmoke',
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 10
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,

  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,

  },
  tableCol2: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,


  },
  tableCell: {
    margin: "auto",

    fontSize: 10
  },
  userCard: {

    fontSize: 10,
    paddingBottom: 5
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,

  },
  projectCard: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: '5px',
    borderStyle: 'solid',
    marginBottom: 20



  },
  button: {
    display: 'flex',
    borderTopColor: 'grey',
    borderTopWidth: '5px',
    color: '#4285f4',
    borderTopStyle: "solid",
    fontSize: 10,
    padding: 5,

    textDecoration: 'none',


    textAlign: 'center'

  },
  tableHeaders: {
    backgroundColor: '#4285f4',
    color: ' white',
    padding: 5,

  },
  tableContents: {
    padding: 5,
    backgroundColor: 'white'
  },
  bulletPoints: {
    fontSize: 10,
    paddingBottom: 5

  },
  image: {
    width: 110,
    height: 110,
    objectFit: 'cover',
    marginVertical: 10,
    borderRadius: 9999
  },
  link: {
    fontSize: 10,
    paddingRight: 10,
    color: '#4285f4',
    textDecoration: 'none',
  }
});

// Create Document Component
const MyDocument = (props) => {

  const eduList = props.userDetails.eduDetails.map((eduObject, igKey) => (
    <View id={igKey} style={styles.tableRow}>
      <View style={[styles.tableCol, styles.tableContents]}>
        <Text style={styles.tableCell}>{eduObject.qualification}</Text>
      </View>
      <View style={[styles.tableCol, styles.tableContents]}>
        <Text style={styles.tableCell}>{eduObject.field}</Text>
      </View>
      <View style={[styles.tableCol, styles.tableContents]}>
        <Text style={styles.tableCell}>{eduObject.institute}</Text>
      </View>
      <View style={[styles.tableCol, styles.tableContents]}>
        <Text style={styles.tableCell}>{eduObject.passout}</Text>
      </View>
      <View style={[styles.tableCol, styles.tableContents]}>
        <Text style={styles.tableCell}>{eduObject.grade}</Text>
      </View>
    </View>
  ))

  const expList = props.userDetails.expDetails.map((expObject, igKey) => (
    <View id={igKey} style={styles.tableRow}>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{expObject.type}</Text>
      </View>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{expObject.organization}</Text>
      </View>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{expObject.position}</Text>
      </View>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{expObject.duration}</Text>
      </View>
    </View>
  ))

  const skills = props.userDetails.skills.map((skillObj, igKey) => (
    <Text id={igKey} style={styles.bulletPoints}>&bull;&nbsp;{skillObj.skill}</Text>
  ))

  const achievements = props.userDetails.achivs.map((achivObj, igKey) => (
    <Text id={igKey} style={styles.bulletPoints}>&bull;&nbsp;{achivObj.achiv}</Text>
  ))

  const projectDetails = props.userDetails.proDetails.map((projectObj, igKey) => (
    <View style={styles.projectCard}>
      <Text id={igKey} style={{ fontSize: 12, marginLeft: 10, marginTop: 10, marginBottom: 5 }}> {projectObj.name} </Text>
      <Text id={igKey} style={{ fontSize: 10, color: 'grey', marginLeft: 10, marginVertical: 5 }}> {projectObj.type} </Text>
      <Text id={igKey} style={{ fontSize: 12, marginLeft: 10, marginVertical: 5 }}> {projectObj.description} </Text>
      <View style={{ height: ' 1px', backgroundColor: 'lightgrey' }} />
      <Link src={projectObj.link} style={styles.button}>Click here to view</Link>

    </View>


  ))

 

  const training = props.userDetails.trainDetails.map((trainObj, igKey) => (
    <View id={igKey} style={styles.tableRow}>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{trainObj.type}</Text>
      </View>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{trainObj.from}</Text>
      </View>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{trainObj.to}</Text>
      </View>
      <View style={[styles.tableCol2, styles.tableContents]}>
        <Text style={styles.tableCell}>{trainObj.description}</Text>
      </View>
    </View>


  ))

  const trainingValidity = (props) => {
    if (props.userDetails.trainDetails.length === 0  ) {
     console.log('array empty');
   }
   else {
     return (
       <View>

         <Text style={styles.heading}>Training</Text>
         <View style={styles.table}>
           <View style={styles.tableRow}>
             <View style={[styles.tableCol2, styles.tableHeaders]}>
               <Text style={styles.tableCell}>Type</Text>
             </View>

             <View style={[styles.tableCol2, styles.tableHeaders]}>
               <Text style={styles.tableCell}>From</Text>
             </View>
             <View style={[styles.tableCol2, styles.tableHeaders]}>
               <Text style={styles.tableCell}>To</Text>
             </View>
             <View style={[styles.tableCol2, styles.tableHeaders]}>
               <Text style={styles.tableCell}>Description</Text>
             </View>
           </View>
           {training}
         </View>
       </View>
     )
   }
 }


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>


          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={[styles.userCard, styles.heading]}>
                {props.userDetails.formValues[0].value + " " + props.userDetails.formValues[1].value}
              </Text>

              <Text style={styles.userCard}>
                {props.userDetails.formValues[2].value}, {props.userDetails.formValues[3].value}
              </Text>
              <Text style={styles.userCard}>{props.userDetails.formValues[4].value}</Text>
              <Text style={styles.userCard}>
                Mobile: {props.userDetails.formValues[6].value}
              </Text>
              <Text style={styles.userCard}>
                Email: {props.userDetails.formValues[5].value}
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {props.userDetails.formValues[7].value ? <Link src={props.userDetails.formValues[7].value} style={styles.link}>
                  {props.userDetails.formValues[7].config.label}

                </Link> : null}

                {props.userDetails.formValues[8].value ? <Link src={props.userDetails.formValues[8].value} style={styles.link}>

                  {props.userDetails.formValues[8].config.label}

                </Link> : null}
              </View>


            </View>

            <Image style={styles.image} src={props.userDetails.imageUrl} />

          </View>

          <Text>&nbsp;</Text>
          <View>
            <Text style={styles.heading}>Bio</Text>
            <Text> {props.userDetails.formValues[9].value} </Text>

          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text style={styles.heading}>Educational Details</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={[styles.tableCol, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Qualification</Text>
                </View>
                <View style={[styles.tableCol, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Field</Text>
                </View>
                <View style={[styles.tableCol, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Institute</Text>
                </View>
                <View style={[styles.tableCol, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Passout</Text>
                </View>
                <View style={[styles.tableCol, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Grade</Text>
                </View>
              </View>
              {eduList}
            </View>
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text style={styles.heading}>Experience</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={[styles.tableCol2, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Type</Text>
                </View>
                <View style={[styles.tableCol2, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Oraganization</Text>
                </View>
                <View style={[styles.tableCol2, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Position</Text>
                </View>
                <View style={[styles.tableCol2, styles.tableHeaders]}>
                  <Text style={styles.tableCell}>Duration</Text>
                </View>
              </View>
              {expList}
            </View>
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text style={styles.heading}>Skills</Text>
            {skills}
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text style={styles.heading}>Achievements</Text>
            {achievements}
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text style={styles.heading}>Projects</Text>
            {projectDetails}
          </View>
          <Text>&nbsp;</Text>


          {trainingValidity}
          
        </View>
      </Page>
    </Document>
  )
}

export default MyDocument;