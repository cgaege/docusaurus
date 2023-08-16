import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pretrained AI Models for Healthcare',
    Svg: require('@site/static/img/undraw_around_the_world.svg').default,
    description: (
      <>
        Extract medical entities like diagnoses, medications and laboratory values from unstructured health text.
      </>
    ),
  },
  {
    title: 'Turn Medical Data Into Insights',
    Svg: require('@site/static/img/undraw_version_control.svg').default,
    description: (
      <>
        Bridge the gap between unstructured electronic health records and a highly structured data repository for advanced analytics.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Easy-to-use, well-documented API based on FHIR to integrate healthcare NLP into your apps.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
