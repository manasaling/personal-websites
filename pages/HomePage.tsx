import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './HomePage.module.css'

export default function HomePage() {
    return <div>



<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300&display=swap');
</style>
      <div className={styles.homepage}>

        <div className={styles.detail}>

          <div className={styles.textContainer}>

            <div className={styles.name}>
              <h1>Name</h1>
            </div>

             <div className={styles.bio}>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
             </div>

            <div className={styles.socialMediaIcons}>
              <SocialIcon url="https://www.linkedin.com/in/manasa-lingireddy/" />
              <SocialIcon url="https://github.com/manasaling" />
              <SocialIcon url="https://www.instagram.com/manasa.ling/" />
            </div>

          </div>

        

          <div className={styles.profilePicture}>
            <img src={"./picture.jpg"} alt="profile picture"/>
          </div>

     

        </div>

      </div>
    
      </div>;
  }