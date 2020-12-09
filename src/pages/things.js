import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function Things() {

  return (
    <Layout>
      <SEO title="The Things —  Acumen Academy Retreat" />
      <div className="main-message">
        <h1>The Things</h1>
        <h2>Async activity will be posted tomorrow. Check back on the 10th.</h2>
      </div>
    </Layout>
  )
}

export default Things
