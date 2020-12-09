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
    base("DONT EDIT")
      .select({})
      .eachPage(
        function page(records) {
          records.forEach(function (record) {
            if(record.get("Attachments")[0]) {
              airImages.push(record.get('Attachments')[0].url)
            }
            airLoomVideos.push(record.get("Looms"))
            airParagraphs.push(record.get("Writing"))
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
        <h2>We Who've Chosen to be Present</h2>

        <p>
          We live across generations, cities, countries, continents, and cultures but, for whatever reason, we outwitted those divisions and found our way here, converging in a unique moment. Like so many atoms flying through space, we've randomly, rather impossibly, bumped into each other, and are temporarily bonded, forming something greater than ourselves.
          </p>
      <p> Like all things made of other things, Acumen Academy, whatever it is and becomes, is, fundamentally, just the 'we' who are present.
      </p>
         
      <p>That begs the question, who are we? Or at it's root, who are you?</p>
          
<p>Take a moment to think about everything else you could be doing in the context of this life begging to be lived richly. With so little time but so many options, why then, have you chosen to spend it here, with us, with Acumen Academy. Why do you continue to chose to be present?</p>

<Link to="/video-instructions/"><button>I Want to Make a Video</button></Link> 

<iframe class="airtable-embed" src="https://airtable.com/embed/shrgFU7ofLY8easfB?backgroundColor=pink" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}} ></iframe>
</div>

<div>
  <ul>
    <li>Click <a href="https://www.loom.com/desktop">here to install the video software</a> in Chrome or on Computer</li>
  </ul>
</div>

        
      <div className="video-wrapper">{videos[0] ?  videos.map((item, idx) => {
      return <div key={item+idx} dangerouslySetInnerHTML={{__html: item}}></div>
    }) : "Loading ..."}</div>
      
    </Layout>
  )
}

export default Videos
