import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LoomOne from '../images/loom_one.png'

function VideoInstructions() {
  return (
    <Layout>
      <SEO title="Video Instructions — Acumen Academy Retreat" />
      <div className="main-message">
        <h2 style={{marginBottom:  '3rem'}}>Adding a Video</h2>
        <h3>Step One:</h3>
        <p>Sign-up for Loom.</p>
        <p>
          You should've received an email from Loom.com, inviting you to join the Acumen Academy Retreat Loom instance. If you did not, send a message to Joshua Maddox in Slack. Optionally, you can sign up for <a href="https://www.loom.com/signup">your own account here, it's free.</a>
        </p>
        <h3>Step Two:</h3>
        <p>Download or install Loom and login. You can install it locally on your Mac/PC or run it as a Chrome extension. The Chrome extension is the easiest to set-up but all options are easy. <a href="https://www.loom.com/desktop">Click here to install.</a></p>
        <h3>Step Three:</h3>
        <p>Use Loom to record your response. Follow the steps shown in the video below but with one minor adjustment, in the drop menu shown at 0:18, select the "Camera Only" option instead of "Screen and Camera".</p>
        <iframe className="airtable-embed" src="https://www.loom.com/embed/7f68fa7f01e349cab91b0c36168f68c3" frameBorder="0" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}} ></iframe>
        <h3>Step Four:</h3>
        <p>Once you've finished recording, grab the embed code. Be sure to select the "Responsive" option before copying and then paste it into the form below.</p>
        <p>The following video shows how to do that:</p>
        <iframe className="airtable-embed" src="https://www.loom.com/embed/897168d59c3647ba8e42b42de2f6c745" frameBorder="0" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}} ></iframe>
        <h3>The Form:</h3>
        <iframe className="airtable-embed" src="https://airtable.com/embed/shrgFU7ofLY8easfB?backgroundColor=pink" frameBorder="0" width="100%" height="800" style={{background: 'transparent', border: 'none'}} ></iframe>
</div>
      
    </Layout>
  )
}

export default VideoInstructions
