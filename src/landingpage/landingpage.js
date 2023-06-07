import React , {useState, useEffect} from 'react';
import "./landingpage.css";
import pic1 from "../assets/pic1.jpg";
import {BsSun} from 'react-icons/bs'
import {BsMoonStars} from 'react-icons/bs'

const LandingPage = () => {
  const [theme, setTheme] = useState('light');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    setIsButtonClicked(!isButtonClicked);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
   
    <div className='landing__container'>
   
      <div className='first__part'>
      
      <button
          className={`scroll-button ${isButtonClicked ? 'clicked' : 'notclicked'}`}
          onClick={toggleTheme}
        >
        <div className="icon-circle-sun">
          <BsSun className="sun-icon" />
        </div>
        <div className="icon-circle-moon">
          <BsMoonStars className="moon-icon" />
        </div>
      </button>
        <div className='description__Part'>
          <h1>I am Niranjana.</h1>
          <h2>a Frontend developer,</h2>
          <h2>UI/UX designer, </h2> 
          <h2>Game developer,</h2>
          <h2>Business analyst</h2>
        </div>
        <div>
          <img src={pic1} alt=''/>
        </div>
      </div> 

      
      <div className='project__container'>
         <h1>MY SKILLS</h1>
           <h2>Web developer</h2>
           <h3>Introducing myself as a passionate individual, I am a trainee at IEDC MEC, the entrepreneurship development cell. As an active participant in the field of technology and management, I had the privilege to showcase my skills at IBeTo, a prestigious national-level project presentation held during Excel 2019, the annual techno-managerial fest of Govt. Model Engineering College.With a keen interest in innovation and problem-solving, I have enthusiastically taken part in numerous hackathons, where I have had the opportunity to collaborate with like-minded individuals and work on exciting projects.In summary, I am a dedicated individual who actively participates in various initiatives, collaborates with fellow enthusiasts, and contributes to the design and development of innovative solutions. With a strong passion for technology, problem-solving, and entrepreneurship, I aim to continue my journey of growth and make meaningful contributions to the industry.</h3>
           <ul>
           <li><a href='https://roots-frontend.pages.dev/'>Roots</a></li>
           <li><a href='https://github.com/Niranjana123-art/CV-Frontend'>CV Analysis</a></li>
           <li><a href='https://github.com/Niranjana123-art/Findmyhostel1'>Find my hostel</a></li>
           <li><a href='https://github.com/Niranjana123-art/WhatChat'>Find my hostel</a></li>
           
           </ul>       

           <h2>UI/UX designer</h2>
           <h3> I am also involved in the design aspect of projects. I take great pride in creating visually appealing and user-friendly pages that contribute to a seamless user experience. Through my designs, I strive to strike a balance between aesthetics and functionality, ensuring that the end-users have a delightful and intuitive interaction with the products I develop.</h3>
           <ul>
               <li><a href='https://www.figma.com/file/My52R6toL9NMzKP62U3r99/Untitled?node-id=0%3A1&t=BS1juPQUWFGm2F8N-1'>Roots</a></li> 
                <li><a href='https://www.figma.com/file/MCifAsCqCuQwKCETQ3FviG/Untitled?type=design&node-id=12%3A3&t=rB92OvVYF9rcH1ZP-1'>YourHR</a></li>
                <li><a href='https://www.figma.com/file/rC9EHmyaJBaQu4o82kNbub/Untitled?type=design&node-id=0%3A1&t=5I2tTf7bNH08hrkv-1'>Face authentication for pay-apps</a></li>
                <li><a href='https://www.figma.com/file/USZtzZ9wE5gY6XL205BpRO/CV-Analysis-(Copy)?type=design&node-id=0%3A1&t=KlCAmPbi8VPhCEuW-1'>Job recruiter</a></li>
                <li><a href='https://www.figma.com/file/KheEvJRD5ysGLG3Eu19lRG/Untitled?type=design&node-id=0%3A1&t=7brl5WVaxxMRzus7-1'>MLA schedule-app</a></li>
           </ul>

           <h2>Game Development</h2>
           <h3>I am an aspiring game developer with a passion for creating immersive experiences and captivating game characters. Through my internship at KSUM TechMaghi and my personal projects, I have gained hands-on experience in 2D game development and design, where I actively contributed to modeling and designing captivating games. It was a fulfilling experience to bring game concepts to life, creating immersive experiences for players. I find great joy in the art of crafting game characters, ensuring they were visually appealing, unique, and aligned with the overall game aesthetics. </h3>
           
      </div>

      <div className='contact__part'>
        <h1>Get In Touch</h1>
        <a href="mailto:niranjanamor@gmail.com" class='button'>CONTACT ME</a>
      </div>

      <div className='footer__container'>
        <a href='https://www.linkedin.com/in/niranjana-b-nair-48b976203/'>Linkedin</a>
        <a href='https://github.com/Niranjana123-art'>Github</a>
      </div>

    </div>
 
  );
};

export default LandingPage;
