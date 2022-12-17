import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <Image
       src="/icons/eth.png"
       alt="Landscape picture"
       width={128}
       height={128}
    />
      <h1 className={styles.h1}>WELCOME TO THE SKETTY BONES CLUB!</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Show the Image */}
          <Image
           src="/icons/drop.png"
           alt="Landscape picture"
           width={96}
           height={96}
          />
            <h2 className={styles.selectBoxTitle}>MINT A NEW SKETTY BONE</h2>
            <p className={styles.selectBoxDescription}>
              Claim your <b>Sketty Bone</b> NFT(s).
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Show the Image */}
          <Image
           src="/icons/token.png"
           alt="Landscape picture"
           width={96}
           height={96}
          />
          <h2 className={styles.selectBoxTitle}>STAKE YOUR SKETTY BONE</h2>
          <p className={styles.selectBoxDescription}>
            Here you can stake your <b>Sketty Bones(s).</b>{" "}
            <b></b>
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/team`)}
        >
          {/* Show the Image */}
          <Image
           src="/icons/team.png"
           alt="Landscape picture"
           width={96}
           height={96}
          />
          <h2 className={styles.selectBoxTitle}>OUR TEAM</h2>
          <p className={styles.selectBoxDescription}>
            Meet our <b>Sketty Bones Club</b>{" "} Team.
            <b></b>
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/roadmap`)}
        >
          {/* Show the Image */}
          <Image
           src="/icons/skeleton roadmap.png"
           alt="Landscape picture"
           width={96}
           height={96}
          />
          <h2 className={styles.selectBoxTitle}>ROADMAP</h2>
          <p className={styles.selectBoxDescription}>
            Here you can see our <b>Roadmap.</b>{" "}
            <b></b>
          </p>
        </div>
        </div>
      </div>
  );
};

export default Home;
