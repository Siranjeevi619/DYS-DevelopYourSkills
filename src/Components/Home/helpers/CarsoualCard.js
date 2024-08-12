import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/Style/CarsoualCard.css';
import { useNavigate } from 'react-router';
import ReactThumbnail from '../../../assets/images/Course-img/React-image.png';

function CourseCard({ title, author, image }) {
  const navigate = useNavigate();

  const handleCourseView = () => {
    navigate('/course-view');
  };

  const cardStyle = {
    width:
      window.innerWidth >= 1200 ? '35rem' : 
      window.innerWidth >= 769 ? '24rem' : 
      '18rem', 
      
    borderRadius: '8px',
  };

  return (
    <div className='ms-md-5'>
      <div className="card shadow course-card" style={cardStyle}>
        <img src={ReactThumbnail} className="card-img-top course-card-img h-auto" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            by <span className="text-primary h5">{author}</span>
          </p>
          <div className="row">
            <button className="btn btn-primary" onClick={handleCourseView}>
              View course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CourseCard;
