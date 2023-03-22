import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Improve code review communication',
    Svg: require('@site/static/img/undraw_code_typing.svg').default,
    description: (
      <>
       EZ PR Bot bridges the gap between Slack and Github, allowing your crucial code 
       review workflows to be done through Slack shortcuts/commands.
      </>
    ),
  },
  {
    title: 'Measure your team\'s review process',
    Svg: require('@site/static/img/undraw_progress_overview.svg').default,
    description: (
      <>
        EZ PR Bot surfaces key metrics about code reviews, allowing you to
        identity areas of improvement for your team.
      </>
    ),
  },
  {
    title: 'Stay on top of code reviews',
    Svg: require('@site/static/img/undraw_team_collaboration.svg').default,
    description: (
      <>
        EZ PR Bot empowers developers by providing tools to manage code reviews as a team.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
