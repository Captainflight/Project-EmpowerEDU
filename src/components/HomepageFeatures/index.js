import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Us',
 //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        	Student Resource Center is our all-in-one solution to streamline student resources and information through just one website 
        
      </>
    ),
  },
  {
    title: 'Our Mission',
 //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        	Our goal is to provide a centralized location where students will be able to access useful information and assets to help enrich and reinforce their education. These resoures would be used to empower students to achive better academic.....
        
      </>
    ),
  },
  {
    title: 'Our Goal',
//    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        	We aim to provide everything from educational materials and resources like practice tests and study guides for mathematics to important college information like details about how certain factors affect admission rates or access to basic but important details and information about scholarships that students may not be able to find or may not have time to check into due to work or other life issues
        
        
        	We also hope to expand this service in the future to provide even more useful information to students and incorporate as much of student life as we can to a singular destination that is accessible to all 
      </>
    ),
  },
  {
    title: 'Our Intent',
 //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        	We also hope to expand this service in the future to provide even more useful information to students and incorporate as much of student life as we can to a singular destination that is accessible to all 
        
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
