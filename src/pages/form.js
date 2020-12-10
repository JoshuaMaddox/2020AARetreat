import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LoomOne from '../images/loom_one.png'

function Form() {
  return (
    <Layout>
      <SEO title="The Things Form — Acumen Academy Retreat" />
      <div className="main-message">
     
        <iframe className="airtable-embed" src="https://airtable.com/embed/shrLuj6HpJvObSiXM?backgroundColor=pink" frameBorder="0" width="100%" height="1200" style={{background: 'transparent', border: '1px solid #ccc'}} ></iframe>
</div>
      
    </Layout>
  )
}

export default Form
