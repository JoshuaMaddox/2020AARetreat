import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

var Airtable = require("airtable")
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

function LetterCopy() {
  const [airNotes, setAirNotes] = useState([])
  const allNotes = []

  useEffect(() => {
    let mounted = true
    base("Letter")
      .select({fields: ["Name", "Note"]}).eachPage(
        function page(records) {
          records.forEach(function (record) {
            let packagedSuggestion = {note: false, name: false}
            if(record.get("Name")) {
              packagedSuggestion.name = record.get('Name')
            }
            if(record.get("Note")) {
              packagedSuggestion.note = record.get('Note')
            }
            if(packagedSuggestion.note || packagedSuggestion.name) {
              console.log('I am packaged Suggestion: ', packagedSuggestion)
              allNotes.push(packagedSuggestion)
            }
          })
          if (mounted) {
            setAirNotes(allNotes)
          }
          return () => (mounted = false)
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  }, [])

   const notes = airNotes.map((obj, idx) => {
     const {note, name} = obj
     console.log('obj: ', obj)
     return <div className="suggestion-card" key={note+idx}>
       <h3>{`To: ${name}`}</h3>
       <p>{note}</p>
     </div>
    })

  return (
    <Layout>
      <SEO title="The Things —  Acumen Academy Retreat" />
      <div className="main-message">
        <h1>A Letter to...</h1>

        <p>2020 has been a hard year for all of us, for the world. I won't attempt to discuss the weight of it — we've all experienced it in very different ways.</p>
        <p>

But as we close out the retreat and the year, if there’s a lesson to take away, perhaps it’s that we shouldn’t take each other, and opportunities to share meaningful moments, for granted ... life can shift abruptly. 

        </p>
        <p>

Our final asynchronous activity is a sigh, a chance to speak out, an opportunity to cheer on that coworker who made 2020 a bit easier for you, perhaps it’s a thought, a cry, a message of hope ... whatever you need it to be.
        </p>

        <p>

The link below allows you to write anonymous letters. There’s nothing in the background that can capture who is submitting. 
        </p>

        <p>
To add a few constraints and precautions, there’s a drop down menu that asks you to select who you’re addressing — a co-worker, Acumen Academy as a whole, the world, your 2021-self etc ... If addressing a specific individual, please keep it to recognition/adulation.
        </p>
<p>
<a href="https://airtable.com/shrXT7DabO4txZPT3"><button>Write a Letter</button></a>

</p>
        <div>
          <h2> A Letter ...</h2>
          <p>Letters will show here once they start coming in.</p>
        {notes}  
      </div>
      </div>
    </Layout>
  )
}

export default LetterCopy




