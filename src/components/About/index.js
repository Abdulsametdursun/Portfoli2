import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey there! 👋 I'm Abdulsamet, a passionate undergraduate student
            currently diving into the world of Website Development. I'm a senior
            student who's enthusiastic about crafting captivating online
            experiences through code. If you share the same passion or if you're
            just curious about my journey, you've come to the right place!
          </p>
          <p>
            🎓 Senior Student pursuing my undergraduate degree in Computer
            Science at North American University. 🌱 Currently focusing on
            learning HTML, CSS, JavaScript, and React to create amazing
            websites. 🏎️ Fun Fact: I'm not just about coding but also a car
            enthusiast who loves everything about automobiles!
          </p>
          <p>
            Currently, my main focus is honing my skills in front-end web
            development. I'm delving deep into the world of HTML, CSS, and
            JavaScript, and I'm super excited to be getting my hands dirty with
            React to build interactive and dynamic user interfaces. You'll find
            my projects and repositories reflect my journey as I progress and
            improve my skills.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
