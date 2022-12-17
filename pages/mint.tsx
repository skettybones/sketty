import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Image from 'next/image'


const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
     <Image
      src="/icons/mint drop.png"
      alt="Landscape picture"
      width={220}
      height={220}
    />
    <h1 className={styles.h1}>Mint An Sketty Bones Club NFT</h1>
     <p className={styles.explain}>
        10.000 Sketty Bones coming out of the underworld to conquer the world on the Ethereum Blockchain. The Sketty Bones Club is a hand-drawn 1/1 collection as well a community driven project. <b></b>
      </p>
      <p className={styles.explain}>
        Minting-date 25.December 2022 18:00 H CET! <b></b>
      </p>

      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress="0x2813b673E9126C20dB20F01954f818870ee27361"
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push(`/mint`);
        }}
        onError={(error) => {
          console.error(error);
          alert(error);
        }}
      >
        Claim An Sketty Bones Club NFT
      </Web3Button>
    </div>
  );
};

export default Mint;