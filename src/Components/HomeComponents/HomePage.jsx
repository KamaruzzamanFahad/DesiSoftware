import React from 'react'
import HomeBanner from './HomeBanner'
import HomeAboutCEO from './HomeAboutCEO'
import Feature from './Feature'

export default function HomePage() {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Feature></Feature>
      <HomeAboutCEO></HomeAboutCEO>
    </div>
  )
}
