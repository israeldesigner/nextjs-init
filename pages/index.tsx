import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout  from '../components/Layout'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wi-For - Wi-Fi público e gratuito em Fortaleza</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Wi-For - Wi-Fi público e gratuito em Fortaleza" />
        <meta property="og:description"  content="" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="img/icon-wifor.png" />
        <link rel="icon" href="img/favicon//favicon.ico" />
      </Head>
      <Layout />
    </React.Fragment>
  )
}

export default Home
