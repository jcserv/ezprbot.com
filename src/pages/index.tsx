import React from "react";
import clsx from "clsx";
import { SiSlack } from "react-icons/si";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{marginRight: "5px"}}
            href={`https://slack.com/oauth/v2/authorize?scope=app_mentions%3Aread%2Cchannels%3Ajoin%2Cchannels%3Ahistory%2Cchat%3Awrite%2Cchat%3Awrite.public%2Ccommands%2Cemoji%3Aread%2Cim%3Awrite%2Creactions%3Aread%2Creactions%3Awrite%2Cusers%3Aread%2Cusergroups%3Aread%2Cworkflow.steps%3Aexecute&amp;user_scope=&amp;redirect_uri=https%3A%2F%2Fapi.ezprbot.com%2Fslack%2Foauth_redirect&amp;client_id=${process.env.SLACK_CLIENT_ID}`}
          > 
            <SiSlack style={{marginRight: "5px", marginTop: "5px"}} />
            Add to Slack
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="A Slack bot that accelerates your team's PR review process"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
