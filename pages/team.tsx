import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"


const Home: NextPage = () => {
    const router = useRouter();
  
    return (

     <div className={styles.container}>
           <Image
            src="/icons/team big.png"
            alt="Landscape picture"
            width={220}
            height={220}
           />
           {/* Top Section */}
           <h1 className={styles.h1}>Meet our Sketty Bones Club Team</h1>
           <hr className={`${styles.divider} ${styles.spacerTop}`} />
           <p className={styles.selectBoxDescription}>
              We are an passionate art dedicated multi-culti team coming from all over the world. All of us are from different tech- spaces.  <b></b> 
            </p>
            <p className={styles.selectBoxDescription}>
              Our Discord: https://discord.com/invite/krVgRZvhg7  <b></b> 
            </p>
            <p className={styles.selectBoxDescription}>
              Our Twitter: https://twitter.com/SkettyBonesClub  <b></b> 
            </p>
           <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      
          {/* Show the Image */}
          <Image
           src="/icons/token big.png"
           alt="Landscape picture"
           width={128}
           height={128}
          />
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            <p className={styles.selectBoxDescription}>
              Founder Mango Django: <b></b> 
            <p className={styles.selectBoxDescription}>
              Has the lead. Loves the Web3 and everything around NFTs.
            </p>
            </p>

          {/* Show the Image */}
          <Image
           src="/icons/drop big.png"
           alt="Landscape picture"
           width={128}
           height={128}
          />
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            <p className={styles.selectBoxDescription}>
              Creator Finnez: <b></b> 
            <p className={styles.selectBoxDescription}>
              Genius artist, will bring you to the next level.
            </p> 
            </p> 
            
          {/* Show the Image */}
          <Image
           src="/icons/team woman big.png"
           alt="Landscape picture"
           width={128}
           height={128}
          />
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            <p className={styles.selectBoxDescription}>
              Tech-Head Cisca: <b></b> 
            <p className={styles.selectBoxDescription}>
              Creator of the next gen tech, she`s like a tank full of steroids.
            </p> 
            </p>

            {/* Show the Image */}
            <Image
            src="/icons/investor big.png"
            alt="Landscape picture"
            width={128}
            height={128}
           />
            <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            <p className={styles.selectBoxDescription}>
              Investor Tony: <b></b> 
            <p className={styles.selectBoxDescription}>
              Loves to be on journey and discover new opportunities. Very smart man. 
            </p> 
        </p>
    </div>      
    );
  };


export default Home;