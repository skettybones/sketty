import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"
import Image from 'next/image'

const Home: NextPage = () => {
    const router = useRouter();
  
    return (

     <div className={styles.container}>
      {/* Top Section */}
      <Image
       src="/icons/skeleton roadmap big.png"
       alt="Landscape picture"
       width={220}
       height={220}
     />
      <h1 className={styles.h1}>THE SKETTY BONES CLUB ROADMAP</h1>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      <p className={styles.selectBoxDescription}>
              Our Roadmap is based upon that we are able to sell out the entire Collection. <b></b>
            </p>
            <p className={styles.selectBoxDescription}>
              With each milestone reached we will reveal the next secret phase in the Roadmap. <b></b>
            </p>
            <p className={styles.selectBoxDescription}>
              In the first place we aim to give back to the Community. <b></b>
            </p>
            <p className={styles.selectBoxDescription}>
              Join our Sketty Bones Club Community today, exiting things are coming! <b></b>
            </p>
      
          {/* Show the Image */}
            <Image
             src="/icons/roadmap plan small 2.png"
             alt="Landscape picture"
             width={960}
             height={400}
            />
            <p className={styles.selectBoxDescription}>
            Copyright © Sketty Bones Club 2022 - All Rights Reserved. <b></b>
            </p>
        </div>
  );
};

export default Home;