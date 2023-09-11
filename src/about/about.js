import React from 'react';
import "./about.css";
import { MDBContainer } from "mdb-react-ui-kit";
import {AiFillCalendar} from 'react-icons/ai';

const about = () => {
  return (
    <div className='about__container'>
        <div className='about__description'>
            <h1 className='about__heading'>About Me</h1>
            <h2>I am a creative<span className='bold__tags'> Web Developer</span> and a <span className='bold__tags'>UI/UX Designer</span></h2>
            <h3>         
                I'm Niranjana B. Nair, a dedicated web developer and UI/UX designer with expertise in languages such as Python, C++, and JavaScript. With a passion for crafting intuitive and visually appealing user experiences, I specialize in creating stunning websites and applications that seamlessly blend creativity and functionality.
                Let's connect, explore my portfolio, and discuss potential collaborations to make a meaningful impact together! And also I like to game 😉
            </h3>
       </div>
       <h2>Education </h2>
       <div className='box__model'>
       <MDBContainer >
       <ul className="timeline1">
        <li className="timeline-item1">
          <p className="timeline__date1"><AiFillCalendar/>2020 - Present</p>
          <h5 className="timeline__heading1">B. Tech In Computer Science</h5>
          <p className="timeline__text1">
          I am currently pursuing my B.Tech in Computer Science and Engineering, currently in my third year at the University College of Engineering Thodupuzha Muttom. With a strong academic foundation and a passion for technology, I am actively engaged in expanding my knowledge and honing my skills to stay at the forefront of the field.
          </p>
        </li>
        <li className="timeline-item1 ">
          <p className="timeline__date1"><AiFillCalendar/>2017 - 2019</p>
          <h5 className="timeline__heading1">Higher Secondary Education</h5>
          <p className="timeline__text1">
          I completed my Higher Secondary Education specializing in Computer Science at St. George Higher Secondary School in Kothamangalam, achieving an impressive score of 94%. Through rigorous coursework and practical application, I developed a solid understanding of computer science concepts and gained problem-solving skills that continue to drive my passion for technology.
          </p>
        </li>
      </ul>
    </MDBContainer>
    </div>
       
</div>
  )
}

export default about
