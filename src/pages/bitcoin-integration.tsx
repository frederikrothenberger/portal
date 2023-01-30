import Head from "@docusaurus/Head";
import BuildWithBitcoin from "@site/src/components/BitcoinIntegrationPage/BuildWithBitcoin";
import Hero from "@site/src/components/BitcoinIntegrationPage/Hero";
import HowItWorks from "@site/src/components/BitcoinIntegrationPage/HowItWorks";
import Videos from "@site/src/components/BitcoinIntegrationPage/Videos";
import { resetNavBarStyle } from "@site/src/utils/reset-navbar-style";
import Layout from "@theme/Layout";
import React, { useRef } from "react";
import Content from "../components/BitcoinIntegrationPage/Content";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

function BitcoinIntegration() {
  resetNavBarStyle();
  const ref = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(ref);

  return (
    <Layout
      title="Bitcoin Integration"
      description="The Internet Computer enables direct integration with the Bitcoin network. By way of bridge-less communication with the Bitcoin network and a novel threshold ECDSA protocol, canisters on the Internet Computer can now securely receive, hold, and send bitcoins."
      editPath={`https://github.com/dfinity/portal/edit/master/${__filename}`}
    >
      <Head>
        <meta
          property="og:image"
          content={
            "https://internetcomputer.org/img/shareImages/share-bitcoin-integration.jpeg"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://internetcomputer.org/img/shareImages/share-bitcoin-integration.jpeg"
          }
        />
        <title>Bitcoin Integration</title>
      </Head>
      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}
        <Hero ref={ref}></Hero>
        <HowItWorks></HowItWorks>
        <Content></Content>
        {/* <ReleaseTimeline></ReleaseTimeline> */}
        <Videos></Videos>
        <BuildWithBitcoin></BuildWithBitcoin>
      </main>
    </Layout>
  );
}

export default BitcoinIntegration;
