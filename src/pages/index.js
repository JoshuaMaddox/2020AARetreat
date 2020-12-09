import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

var Airtable = require("airtable")
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

function IndexPage() {
  // const [airtableResults, setAirtableResults] = useState({paragraphs: false, photos: false, videos: false})
  // const airParagraphs = []
  // const airImages = []
  // const airLoomVideos = []
  // useEffect(() => {
  //   let mounted = true
  //   base("Site")
  //     .select({
  //       maxRecords: 200,
  //       view: "Grid view"
  //   })
  //     .eachPage(
  //       function page(records) {
  //         records.forEach(function (record) {
  //           if(record.get("Attachments")[0]) {
  //             airImages.push(record.get('Attachments')[0].url)
  //           }
  //           airLoomVideos.push(record.get("Looms"))
  //           airParagraphs.push(record.get("Writing"))
  //         })
  //         if (mounted) {
  //           setAirtableResults({
  //             videos: airLoomVideos[0] ? airLoomVideos : false,
  //             photos: airImages[0] ? airImages : false,
  //             paragraphs: airParagraphs[0] ? airParagraphs : false
  //           })
  //         }
  //         return () => (mounted = false)
  //       },
  //       function done(err) {
  //         if (err) {
  //           console.error(err)
  //           return
  //         }
  //       }
  //     )
  // }, [])
  // const {paragraphs, photos, videos } = airtableResults

  

  return (
    <Layout>
      <SEO title="Home" />

      <div className="main-message">
        <h2>Welcome to the 2020 Acumen Academy Retreat!</h2>
        <p>Over the coming three days, you have two jobs:</p>
        <ul>
          <li>Get to know the broader team and enjoy their company</li>
          <li>Relax</li>
        </ul>
        <p>Yes. It’s a busy time. It’s stressful. It’s the end of the year and there are so many projects. So many loose ends. So many … things. </p>
        
        <p>We get it. We all feel it. However, this is a moment for self-care and team-care. Acumen Academy, fundamentally, is nothing but ‘us’. It’s time ‘we’ got to know ‘us’ so as to understand, at its heart, what Acumen Academy really is. </p>
        
        <p>Okay, now that we’ve agreed that we’re going to let go of the mountain of work for a brief period —  we’ve agreed, right? Hmmmmm? — here’s how to explore the retreat AND, a few, hopefully fun, assignments.</p>

        <h3>Potential Questions</h3>
        <h4>Where can I find the calendar and events?</h4>
        <p>We got ya. Check out the calendar, event cards, and time zones here.</p>
        <Link to="/calendars/"><button>Imma Check Those Out!</button></Link>
        <h4>Once I've found an event I want to join, how do I join it?</h4>
        <p>If you're looking at the calendar, click on the particular event you want to join, the even scroll down to .</p>
        <Link to="/#/"><button>...</button></Link>

        {/* video view bingo */}
        {/* <p>Assignment One:</p>
        <p>RSVP for an event.</p>
        <p>(Also found in #aa-retreat Slack Channel)</p> */}
        
        </div>

        {/* <div>{videos[0] ?  videos.map((item, idx) => {
        return <div key={item+idx} dangerouslySetInnerHTML={{__html: item}}></div>
      }) : "Loading ..."}</div> */}

      {/* <div>{paragraphs[0] ?  paragraphs.map((item,idx) => {
        return <p key={item+idx}>{item}</p>
      }) : "Loading ..."}</div>
      
       <div>{photos[0] ? photos.map((item, idx) => {
    return <img key={item+idx} src={item} />
    }) : "Loading ..."}</div> */}
    </Layout>
  )
}

export default IndexPage
