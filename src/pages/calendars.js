

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import loader from "../images/loading.gif"


function Calendars() {
  return (
    <Layout>
      <SEO title="Calendars — Acumen Academy Retreat" />
      <div className="calendar-wrapper">
       <h2>Retreat Calender of Events</h2>
       <iframe className="airtable-embed" src="https://airtable.com/embed/shrcMNF9OZaYgIsDY?backgroundColor=pink&viewControls=on" frameBorder="0" width="100%" height="533" style={{background: 'transparent', border: 'none', background: `url(${loader}) center center no-repeat`}}></iframe>
       <h2>Browse Event Cards</h2>
       <iframe className="airtable-embed" src="https://airtable.com/embed/shrhslTibcigFY3NW?backgroundColor=pink&viewControls=on" frameBorder="0" width="100%" height="533" style={{background: 'transparent', border: 'none', background: `url(${loader}) center center no-repeat`}}></iframe>
       <h2>Check the Time in Other Regions</h2>
       <a href="https://www.timeanddate.com/worldclock/converter.html?iso=20201208T130000&p1=224&p2=41&p3=179&p4=136&p5=141&p6=125&p7=170&p8=757&p9=176&p10=73&p11=122"><button>Click To Check Times</button></a>
    
      </div> 

    </Layout>
  )
}

export default Calendars
