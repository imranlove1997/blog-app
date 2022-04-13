import React from 'react';
import { Link } from 'react-router-dom';

function ProfileBanner(props) {
  let { image, username } = props.user;
  return (
    <section className='profile padding'>
      <div className='md-wrapper profile-wrapper text-center'>
        <img
          src={image || '/images/smiley.jpg'}
          alt='Smiley'
        />
        <h1 className='profile-name'>{username}</h1>
        <div className='follow-btn profile-btn'>
          <Link to='/settings'>
            <p>Edit Profile Settings</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProfileBanner;
