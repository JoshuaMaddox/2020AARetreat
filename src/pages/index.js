import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//aaretreat2020-298004
//https://firebase.google.com/docs/firestore/quickstart?authuser=0
//https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=0&pli=1&project=aaretreat2020-298004&supportedpurview=project
//https://console.cloud.google.com/appengine/start?_ga=2.121846795.1457999394.1607401286-1301466310.1589251170
// const admin = require("firebase-admin")
// admin.initializeApp()

// const db = admin.firestore()

var Airtable = require("airtable")
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

function IndexPage() {
  const [writings, setWritings] = useState([])
  const items = []
  useEffect(() => {
    let mounted = true
    base("Table 1")
      .select({})
      .eachPage(
        function page(records) {
          records.forEach(function (record) {
            items.push(record.get("Writing"))
          })
          if (mounted) {
            setWritings(items)
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

  let something = writings.map((item, idx) => {
    return <p key={item + idx}>{item}</p>
  })
  return (
    <Layout>
      <SEO title="Home" />
      <div>{writings[0] ? something : "Loading ..."}</div>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
