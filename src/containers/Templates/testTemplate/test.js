import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Image } from '@react-pdf/renderer';
import './test.css'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol2: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10
  }
});

// Create Document Component
const MyDocument = (props) => {

  const eduList = props.userDetails.eduDetails.map((eduObject, igKey) => (
    <View id={igKey} style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{eduObject.qualification}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{eduObject.field}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{eduObject.institute}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{eduObject.passout}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{eduObject.grade}</Text>
      </View>
    </View>
  ))

  const expList = props.userDetails.expDetails.map((expObject, igKey) => (
    <View id={igKey} style={styles.tableRow}>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{expObject.type}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{expObject.organization}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{expObject.position}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{expObject.duration}</Text>
      </View>
    </View>
  ))

  const skills = props.userDetails.skills.map((skillObj, igKey) => (
    <Text id={igKey}>&bull;&nbsp;{skillObj.skill}</Text>
  ))

  const achievements = props.userDetails.achivs.map((achivObj, igKey) => (
    <Text id={igKey}>&bull;&nbsp;{achivObj.achiv}</Text>
  ))

  const projectDetails = props.userDetails.proDetails.map((projectObj, igKey) => (
    <View>
      <Text id={igKey} > {projectObj.type} </Text>
      <Text id={igKey} > {projectObj.name} </Text>
      <Text id={igKey} > {projectObj.description} </Text>
      <Link src={projectObj.link}>Click here to view</Link>
    </View>


  ))

  const training = props.userDetails.trainDetails.map((trainObj, igKey) => (
    <View id={igKey} style={styles.tableRow}>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{trainObj.type}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{trainObj.from}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{trainObj.to}</Text>
      </View>
      <View style={styles.tableCol2}>
        <Text style={styles.tableCell}>{trainObj.description}</Text>
      </View>
    </View>


  ))

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View stule={{display:'flex'}}>
            <View>
              <Text>
                {props.userDetails.formValues[0].value + " " + props.userDetails.formValues[1].value}
              </Text>
              <Text>
                {props.userDetails.formValues[2].value}, {props.userDetails.formValues[3].value}
              </Text>
              <Text>{props.userDetails.formValues[4].value}</Text>
              <Text>
                Mobile: {props.userDetails.formValues[6].value}
              </Text>
              <Text>
                Email: {props.userDetails.formValues[5].value}
              </Text>
            </View>
            <View>
              {/* <Image src={props.imageUrl} /> */}
            </View>
          </View>


          <Text>&nbsp;</Text>
          <View>
            <Text>Educational Details</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Qualification</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Field</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Institute</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Passout</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Grade</Text>
                </View>
              </View>
              {eduList}
            </View>
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text>Experience</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell}>Type</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell}>Oraganization</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell}>Position</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell}>Duration</Text>
                </View>
              </View>
              {expList}
            </View>
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text>Skills</Text>
            {skills}
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text>Achievements</Text>
            {achievements}
          </View>
          <Text>&nbsp;</Text>
          <View>
            <Text>Projects</Text>
            {projectDetails}
          </View>
          <Text>&nbsp;</Text>
          <Text>Training</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>Type</Text>
              </View>

              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>From</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>To</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>Description</Text>
              </View>
            </View>
            {training}
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default MyDocument;