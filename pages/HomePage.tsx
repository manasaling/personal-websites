import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './HomePage.module.css';
import {
  name,
  description,
  LinkedinURL,
  InstagramURL,
  GithubURL,
} from '../constants/userInfo';

export default function HomePage() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300&display=swap');
      </style>
      <div className={styles.homepage}>
        <div className={styles.detail}>
          <div className={styles.textContainer}>
            <div className={styles.name}>
              <h1>Hi my name is {name}</h1>
            </div>

            <div className={styles.bio}>
              <p>{description}</p>
            </div>

            <div className={styles['social-media']}>
              <SocialIcon className={styles['social-icon']} url={LinkedinURL} />
              <SocialIcon className={styles['social-icon']} url={GithubURL} />
              <SocialIcon
                className={styles['social-icon']}
                url={InstagramURL}
              />
            </div>
          </div>

          <div className={styles.imgContainer}>
            <img
              className={styles.circleimg}
              src={'./picture.jpg'}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
