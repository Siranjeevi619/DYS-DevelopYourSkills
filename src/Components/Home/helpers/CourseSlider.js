import React from 'react';
import HTMLLogo from '../helpers/CourseIcons/html-5.png';
import FlutterLogo from '../helpers/CourseIcons/icons8-flutter-512.png';
import JavaScriptLogo from '../helpers/CourseIcons/icons8-javascript-512.png';
import SpringBootLogo from '../helpers/CourseIcons/icons8-spring-boot-512.png';
import LinuxLogo from '../helpers/CourseIcons/linux.png';
import ReactLogo from '../helpers/CourseIcons/react.png';
import UbuntuLogo from '../helpers/CourseIcons/ubuntu.png';
import WindowsLogo from '../helpers/CourseIcons/windows.png';
import '../../../assets/Style/CourseSlider.css';

function CourseSlider() {
  const CoursesSlidingLogo = [
    HTMLLogo,
    FlutterLogo,
    JavaScriptLogo,
    SpringBootLogo,
    LinuxLogo,
    ReactLogo,
    UbuntuLogo,
    WindowsLogo,
  ];

  const repeatedLogos = [...CoursesSlidingLogo, ...CoursesSlidingLogo];

  return (
  
      <div className='col-12'>
      <h4 className='text-center my-4'>
        Learn Anything at Anywhere with <span>D<span className='text-dys'>Y</span>S</span>
      </h4>
      <div className="slider-container">
        {repeatedLogos.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} className="course-logo" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      </div>
    
  );
}

export default CourseSlider;
