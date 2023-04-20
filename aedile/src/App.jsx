import React from 'react'
import FaqTile from './components/FaqTile'
import { Tile } from './components/Tile'
import aedile_logo from './assets/aedile_logo.svg'
import aedile_bg from './assets/aedile_bg.svg'
import github from './assets/github.svg'
import discord from './assets/discord.svg'
import './styles/main.scss'

function App() {

  return (
    <div className='home-page'>

      <div className='landing-page-navbar'>
        <a className='landing-page-navbar__logo' href='/'><img src={aedile_logo}/></a>
      </div>

      <div className='banner' style={{backgroundImage: `url(${aedile_bg})`}}>
          <h1 className='banner__header'>Improve your Foxhole experience with the Aedile!</h1>
          <a className='button' href="#">Add to server</a>
      </div>

      <div className='landing-page'>
        <h2 className='landing-page__subheader'>What do we offer?</h2>

        <div className='landing-page__tiles-container'>
          <Tile title="Damage Calculator" description="How many rounds you need to kill the structure? Which weapon works best for your target? Check it out using our damage calculator!"/>
          <Tile title="Statsheet" description="Do you want learn more about vehicles or structures in game? Trigger statsheet and get all info you need!"/>
          <Tile title="TBA" description="We're constantly thinking how to improve out bot. Prepare for more content in the future!"/>
        </div>

        <div className='landing-page__about-me'>
          <h2 className='landing-page__subheader'>About Aedile</h2>
          <p className='about-me__text'>
            Aedile is a project by olted, GlowdustWL and Seshien
            to bring the previously colonial-only damage calculator 
            to the public domain through a discord bot. 
            <br/><br/>
            The purpose of the bot and the data it provides 
            is to reduce the black-box nature of Foxhole 
            and allow players to better understand the game 
            they're playing; whether that's for discussion, 
            debate and curiosity, or strategic and tactical planning.
          </p>
          <img className='about-me__img' src={aedile_bg}/>
        </div>
        
        <h2 className='landing-page__subheader'>FAQ</h2>

        <div className='landing-page__faq-tiles-container'>
          <FaqTile question='How does it work?' answer={`The Aedile uses datamined Foxhole datasets to provide accurate, reliable and usable data for the game. It accounts for damage mitigation, structure types, tiers, and knows details about nearly every entity in the game. \n \n The Aedile is a bot that aims for ease of use and practicality first. To that end, it is usable by anyone who knows how to ask a simple question: "How much of x to kill y?". \n \n Boomers of foxhole rejoice.`}/>  
          <FaqTile question='Is it even that useful?' answer={`In the first week of use pf coalition servers such as MSA, the bot was prompted 500+ times. After introduction to faction hubs like SIGIL, 1000+ times.`}/>  
          <FaqTile question='Why does it need to process messages?' answer={`The Aedile needs to process messages to be able to answer prompts. This is a deliberate and difficult design choice which was made in order to maximise usability for the average user. Despite their much more powerful features, slash commands can be clunky and unintuitive for the uninitiated. This is why Aedile always provides an option for inline prompts.`}/>  
          <FaqTile question="How do I know it's safe?" answer={`To show the commitment Aedile makes to safety, the entire source code repository has been published to the public. This opens the developers to having all of their work and data stolen by malicious actors to steal our hard work. It's a deliberate sacrifice to prove the honesty and integrity of the code being presented. We've also given faction hub admins on both sides access to the host; to verify what's on the github is identical to the live server. \n \n [Sigil:KoV#6317] \n [WUH:LordFancyEagle#0339]`}/>  
        </div>

      </div>

      <div className='landing-page-navbar landing-page-navbar--footer'>
        <img className='landing-page-navbar__logo' src={aedile_logo}/>
        <div className='landing-page-navbar__icons'>
          <a className='landing-page-navbar__icon' href="https://github.com/olted/aedilebot"><img src={github}/></a>
          <a className='landing-page-navbar__icon'href="#" ><img src={discord}/></a>
        </div>
      </div>

    </div>
  )
}

export default App
