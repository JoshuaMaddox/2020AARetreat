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

function Videos() {
  const [airtableResults, setAirtableResults] = useState({paragraphs: false, photos: false, videos: false})
  const airParagraphs = []
  const airImages = []
  const airLoomVideos = []
  useEffect(() => {
    let mounted = true
    base("Site")
      .select({fields: ["Attachments", "Writing", "Looms"]}).eachPage(
        function page(records) {
          console.log('I am the records: ', records)
          records.forEach(function (record) {
            if(record.get("Attachments")) {
              console.log('Attachments: ', record.get('Attachments')[0].url)
              airImages.push(record.get('Attachments')[0].url)
            }
            console.log('Test Looms: ', record.get("Looms"))
            if(record.get("Looms")) {
              airLoomVideos.push(record.get("Looms"))
            }
            if(record.get("Writing")) {
              airParagraphs.push(record.get("Writing"))
            }
          })
          if (mounted) {
            setAirtableResults({
              videos: airLoomVideos[0] ? airLoomVideos : false,
              photos: airImages[0] ? airImages : false,
              paragraphs: airParagraphs[0] ? airParagraphs : false
            })
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

  // let images = imgs.map((item,idx) => {
  //   // return <img src={item}/>
  // })
  const {paragraphs, photos, videos } = airtableResults

    // paragraphs.map((item,idx) => {
    //     return <img src={item}/>
    //   })
  

    // videos.map((item, idx) => {
    //   return <div key={item+idx}>{item}</div>
    // })
  
    // photos.map((item, idx) => {
    // return <img key={item+idx} src={item} />
    // })
  

  return (
    <Layout>
      <SEO title="Home" />
      <div className="main-message">
        <h2>Why Here?</h2>
        <p>
        We live across generations, cities, countries, continents, and cultures but, for whatever reason, we outwitted those divisions and found our way here, converging in a unique moment. Like so many atoms flying through space, we've randomly, rather impossibly, collided with each other and are temporarily bonded — forming something greater than ourselves.
        </p>
        <p> Like all things made up of other things, Acumen Academy is nothing more than its atomic parts. It's just us. 
        </p>

        <p>That begs the question, who are we? Or at it's root, who are you? If we can't answer that, it's difficult to answer, at least fundamentally, "What is Acumen Academy?"</p>

        <p>Take a moment to think about everything else you could be doing with this fleeting life. With so little time and so many options, why have you chosen to spend time here, with this team, with Acumen Academy?</p>

        <p>The activity for the day is to create a 30 - 60 second video telling us a few things about yourself and why you continue to show up for this team and the people we serve.</p>

        <p>The results will appear here as they trickle in throughout the day. We encourage you to come back, watch, and get to know the global Acumen Academy team.</p>
        <p>Note: After the retreat this page will either be password protected or taken down but the videos will live on in Airtable.</p>

        <Link to="/video-instructions/"><button>Instructions Found Here</button></Link> 
      </div>


      <div>
      {videos[0] ? videos.map((item, idx) => {
      return <div key={item+idx} dangerouslySetInnerHTML={{__html: item}}></div>
      }) : "Loading Videos..."}
      </div>
          
    </Layout>
  )
}

export default Videos
