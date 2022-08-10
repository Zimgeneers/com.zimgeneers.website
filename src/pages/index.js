import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import PettrakrSection from "../components/PettrakrSection"
import TeamSection from "../components/TeamSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <HeroSection />
      <TeamSection />
      <PettrakrSection />
  </Layout>
)

export default IndexPage
