import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import LoomOne from '../images/loom_one.png'

var Airtable = require("airtable")
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

function VideoInstructions() {
  const [airtableResults, setAirtableResults] = useState({paragraphs: false, photos: false, videos: false})
  const airParagraphs = []
  const airImages = []
  const airLoomVideos = []
  useEffect(() => {
    let mounted = true
    base("Table 1")
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
      <SEO title="Video Instructions — Acumen Academy Retreat" />
      <div className="main-message">
        <h2>Adding a Video</h2>
        <h3>Step One:</h3>
        <p>Sign-up for Loom</p>
        <p>
          You should've received an email from Loom.com, inviting you to join the Acumen Academy Retreat Loom instance. If you did not, send a message to Joshua Maddox in Slack.
        </p>
        <h3>Step Two:</h3>
        <p>Use Loom to record your response</p>
        <h3>Step Three:</h3>
        <p>Grab the embed code from your video using the following steps:</p>
        <img src={LoomOne} alt=""/>



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

export default VideoInstructions
