import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

var Airtable = require("airtable")
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

function Things() {
  const [airtableResults, setAirtableResults] = useState([])
  const airRecomendations = []

  useEffect(() => {
    let mounted = true
    base("Site")
      .select({fields: ["NameTwo", "Suggestion", "Link", "Type"]}).eachPage(
        function page(records) {
          records.forEach(function (record) {
            let packagedSuggestion = {type: false, name: false, suggestion: false, link: false}
            if(record.get("NameTwo")) {
              packagedSuggestion.name = record.get('NameTwo')
            }
            if(record.get("Type")) {
              packagedSuggestion.type = record.get('Type')
            }
            if(record.get("Suggestion")) {
              packagedSuggestion.suggestion = record.get('Suggestion')
            }
            if(record.get("Link")) {
              packagedSuggestion.link = record.get('Link')
            }
            if(packagedSuggestion.type || packagedSuggestion.name || packagedSuggestion.suggestion || packagedSuggestion.link) {
              airRecomendations.push(packagedSuggestion)
            }
          })
          if (mounted) {
            setAirtableResults(airRecomendations)
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

   const recommendations = airtableResults.map((obj, idx) => {
     const {type, name, suggestion, link} = obj
     return <div className="suggestion-card" key={type+idx}>
       <span>{type}</span>
       <h3>{name}</h3>
       <p>{suggestion}</p>
      
   {link ? <div className="link-container"><a href={link}>{`Go to ${type}`}</a><svg width="20px" height="20px" viewBox="0 0 21 12"><g id="Symbols" stroke="none" stroke-width="2"><g id="Dashboard/Course/List-View/Hover" transform="translate(-1312.000000, -26.000000)" className="primary-fill"><polygon id="arrow" points="1326.90704 26 1326.90704 30.8884578 1312 30.8884578 1312 33.099903 1326.90704 33.099903 1326.90704 38 1333 32"></polygon></g></g></svg></div> : <a href="#">No Link Provided</a>}
     </div>
    })

  return (
    <Layout>
      <SEO title="The Things —  Acumen Academy Retreat" />
      <div className="main-message">
        <h1>The Things</h1>
        <p>One of the great things about being with a group of people is they bring lots of fantastic suggestions for … things, all the things.</p>

        <p>
Movies, music, books, poems, apps, websites, tools, courses, ad nauseam.
        </p>
        <p>

Those suggestions spark conversation and provide us opportunities to find commonality. It increases the likelihood we’ll have those “You skateboard to work DoggFace208 style, Ocean Spray in hand, toooooooo! No cap!?!?!?!” moments.
        </p>
        <p>

From an evolutionary perspective, ‘suggesting’ provides us a low-stakes way of giving to the broader group, setting-up mini you-can-trust-me moments that potentially lead to gossip, which, according to <a href="https://www.psychologytoday.com/us/blog/talking-apes/201502/why-you-were-born-gossip">Robin Dunbar, is the very reason language itself was created</a>. Primates groom but we found a way to shortcut that laborious, and likely bitter, bonding process by gossiping and information sharing — thankfully. 

        </p>
        <p>

In honor of our first long-forgotten ancestor who bravely decided to stop picking fleas off their teammates’ backs and chanced offering Netflix recommendations instead, we’re going to share all the things!
        </p>

<p>

Today’s async activity is sharing all those juicy gems we’ve found crawling on, and off, the internet. It can be a movie, song, clip, course, meme, a random thought you had while brushing your teeth … whatever. 
</p>

<p>
Click below to find the recommendation form. Fill it out. Tell us why you’re recommending 'the thing' and, if applicable, give us a link to it. 

All submissions will auto-populate below and we highly encourage MORE than one submission per person. Give us all the goods you got! Somewhat antithetical to the purpose of this goodie spawning exercise, if for some reason you want to suggest but not be held responsible for the thing being suggested, you can select “anonymous” instead of your name … how dangerous.

</p>
<p>
<Link to="/form/"><button>Go to the form</button></Link>

</p>
        <div>
          <h2>Recommendations: </h2>
          <p>Submissions will show here once they start coming in.</p>
        {recommendations}  
      {/* {videos[0] ? videos.map((item, idx) => {
      return <div className='video-wrapper' key={item+idx} dangerouslySetInnerHTML={{__html: item}}></div>
      }) : <p>Videos Are Loading...</p>} */}
      </div>
      </div>
    </Layout>
  )
}

export default Things




// function Videos() {
 
  

//   // let images = imgs.map((item,idx) => {
//   //   // return <img src={item}/>
//   // })
//   const {paragraphs, photos, videos } = airtableResults

//     // paragraphs.map((item,idx) => {
//     //     return <img src={item}/>
//     //   })
  

//     // videos.map((item, idx) => {
//     //   return <div key={item+idx}>{item}</div>
//     // })
  
//     // photos.map((item, idx) => {
//     // return <img key={item+idx} src={item} />
//     // })
  

//   return (
//     <Layout>
//       <SEO title="Why Here — Acumen Academy Retreat" />
//       <div className="main-message">
//         <h2>Why Here?</h2>
//         <p>
//         We live across generations, cities, countries, continents, and cultures but, for whatever reason, we outwitted those divisions and found our way here, converging in a unique moment. Like so many atoms flying through space, we've randomly, rather impossibly, collided with each other and are temporarily bonded — forming something greater than ourselves.
//         </p>
//         <p> Like all things made up of other things, Acumen Academy is nothing more than its atomic parts. It's just us. 
//         </p>

//         <p>That begs the question, who are we? Or at it's root, who are you? If we can't answer that, it's difficult to answer, at least fundamentally, "What is Acumen Academy?"</p>

//         <p>Take a moment to think about everything else you could be doing with this fleeting life. With so little time and so many options, why have you chosen to spend time here, with this team, with Acumen Academy?</p>

//         <p>The activity for the day is to create a 30 - 60 second video, using the instruction linked below, telling us a few things about yourself and why you continue to show up for this team and the people we serve.</p>

//         <p>The results will appear below as they trickle in throughout the day. We encourage you to come back, watch, and get to know the global Acumen Academy team.</p>
//         <p>Note: After the retreat this page will either be password protected or taken down but the videos will live on in Airtable.</p>

//         <Link to="/video-instructions/"><button>Instructions Found Here</button></Link> 
//       </div>


     
          
//     </Layout>
//   )
// }

// export default Videos
