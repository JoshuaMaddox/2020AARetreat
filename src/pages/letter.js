import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function Letter() {

  return (
    <Layout>
      <SEO title="A Letter —  Acumen Academy Retreat" />
      <div className="main-message">
        <h1>The Letter</h1>
        <h2>Async activity will be posted Friday. Check back on the 11th.</h2>
      </div>
    </Layout>
  )
}

export default Letter
