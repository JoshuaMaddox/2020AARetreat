import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {
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
        
        <p>We get it. We all feel it. However, this is a moment for self-care and team-care. Acumen Academy, fundamentally, is nothing but the collective ‘us’. It’s time ‘we’ got to know ‘us’ so as to understand, at its heart, what Acumen Academy is.</p>
        
        <p>Now that we’ve agreed that we’re going to let go of the mountain of work for a brief period —  we’ve agreed, right? — let's take care of a bit of housekeeping.</p>

        <p>In addition to the many synchronous activities on the retreat calendar, each day, a new asynchronous activity will be listed below. Find a moment of your choosing to participate and check back in — you've a team eager to see what you'll post.</p>

        <p>To make the retreat easier to navigate, all of the important retreat links, can be found below or on the <Link to="/calendars/">Calendars page</Link>.</p>

        <h3>Async Activity of the Day:</h3>
        <h4>Why Here?</h4>
        <Link to="/videos/"><button>We Want to Know!</button></Link>
        <h3>Quick Links</h3>
        <h4>Need Calendars, Cards, or Time Zone Converters?</h4>
        <Link to="/calendars/"><button>We Got Ya!</button></Link>
        <h3>Broken Things? Emergencies? AGGHHH!?!?!</h3>
        <h4>Tag @Joshua or @GailBatutis and tell us about that worrisome thing.  </h4>
        <a href="https://slackumen.slack.com/archives/C01C3EH03TK/p1607499218073600"><button>Get Help on Slack!</button></a>
        </div>
    </Layout>
  )
}

export default IndexPage
