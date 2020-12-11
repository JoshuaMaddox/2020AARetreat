import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

var Airtable = require("airtable")
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

function archived() {
  
  const nameButtonArray = []
  const [letters, setLetters] = useState([])
  const [airtableResults, setAirtableResults] = useState({names: nameButtonArray, currentPerson: {name: 'LOADING NAME ...', id: 'someId'} })

  useEffect(() => {
    let mounted = true
    let nextToGo = {Name:'Joshua Maddox', id: 'start'}
    let letterArr = []

    base("The Letter").select({fields: ["Writing", "Name"]}).eachPage(function page(records) {
      records.forEach(function(record) {
        let blurb = record.get("Writing")
        let author = record.get("Name")
        let id = record.getId()
          const letterObj = {}
          letterObj.blurb = blurb
          letterObj.author = author
          letterObj.id = id
          letterArr.push(letterObj)
          console.log(letterObj)
      })
      if (mounted) {
        setLetters(letterArr)
      }
      return () => (mounted = false)
    })

    base("Names").select({fields: ["Name", "IsNext", "HasGone"]}).eachPage(function page(records) {
      records.forEach(function(record) {
        let recordName = record.get("Name")
        let next = record.get("IsNext")
        let id = record.getId()
        let hasGone = record.get("HasGone")
          if(next) {
            nextToGo = {
              name: recordName,
              id
            }
          }
          const nameObj = {}
          nameObj.name = recordName
          nameObj.id = id
          nameObj.hasGone = hasGone
          if(!(hasGone || next)) {
            nameButtonArray.push(nameObj)
          }
      })
    
      if (mounted) {
        setAirtableResults({names: nameButtonArray, currentPerson: nextToGo})
      }
      return () => (mounted = false)
    })
  }, [])
  
   const callAirtable = (e) => {
     //when we click we need to update the current persons infor
    let stateTransfer;
    
    base('Names').update(  [
      {
        id: airtableResults.currentPerson.id,
        fields: {
          IsNext: false,
          HasGone: true
        }
      },
      {
        id: e.target.id,
        fields: {
          IsNext: true
        }
      },
    ], function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
    });
      // window.open(`https://airtable.com/shrJ0ZiqlgJFLrtvg?prefill_Test=${e.target.id}`)
      window.open(`https://airtable.com/shr0pXgpzRKpw7aCx?prefill_Name=${airtableResults.currentPerson.name}`)
      // stateTransfer = airtableResults
      // stateTransfer
      // setAirtableResults()
   }
   
   const letterContainer = letters ? letters.slice(0).reverse().map((letter, num) => {
     return <p title={letter.author} id={letter.id} className="letter-segment">{letter.blurb}</p>
  }) : <p id="werwerlkjsl">{`Letter is loading ...`}</p>

   const buttons = airtableResults.names ? airtableResults.names.map((name, num) => {
     //try to make it so if a written submission hasn;t be provided then hasGone is false/ swithc to true if ture
     if(name.hasGone !== true && name.isNext !== true) {
      return <a onClick={callAirtable} id={name.id} className="nameButton">{name.name}</a>
     } 
   }) : <p id="weasdadsfasf">{`Loading name options ...`}</p>
  return (
    <Layout>
      <SEO title="A Letter —  Acumen Academy Retreat" />
      <div className="main-message">
        <h1>The Letter</h1>
        <p>Compliment</p>
        <p>It can be hard to tell our teammates how genuinely amazing they are. When's the right moment? Will it be received? Will they think we're just being kind rather than genuine.</p>
  <h2 id={airtableResults.currentPerson.id}>{`Hey ${airtableResults.currentPerson.name} you're up. Click on one of the names below to nominate them as the next person to write after you. After you click, you'll be taken to a form to write .... `}</h2>
      </div>
      <div className="button-wrapper">
      {buttons}
      </div>
 <article>
   {letterContainer}
 </article>
    </Layout>
  )
}

export default archived



