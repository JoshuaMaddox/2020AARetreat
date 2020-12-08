

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


function Calendars() {
  return (
    <Layout>
      <SEO title="Calendars — Acumen Academy Retreat" />
      <div className="calendar-wrapper">
       <h2>Retreat Calender of Events</h2>
       <iframe className="airtable-embed" src="https://airtable.com/embed/shrcMNF9OZaYgIsDY?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: 'none'}}></iframe>
       <h2>Browse Event Cards</h2>
       <iframe className="airtable-embed" src="https://airtable.com/embed/shrhslTibcigFY3NW?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: 'none'}}></iframe>
      </div> 

    </Layout>
  )
}

export default Calendars
