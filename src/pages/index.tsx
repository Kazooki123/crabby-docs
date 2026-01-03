import React from 'react';
import type { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/syntaxes/introduction">
            Get Started 📦
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Crabby Docs & Guides!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <section className={styles.introSection}>
          <Heading as="h3">What is Crabby? 🤔</Heading>
          <p>
            Crabby is a programming language that is designed to be simple, easy to learn, and powerful enough to handle complex tasks. It is not just another language; it's a paradigm shift that aims to redefine the way we approach programming.
            <br />
            Crabby is built on the Rust programming language, which is known for its speed, reliability, and security. It is a modern programming language that is suitable for a wide range of applications, from web development to data analysis and artificial intelligence.
          </p>
          <Heading as="h3">Why Crabby? 🤔</Heading>
          <ul>
            <li>Ease of Use: Crabby is designed to be easy to use, making it accessible to beginners and experienced developers alike.</li>
            <li>Performance: Crabby is optimized for performance, ensuring that your programs run as fast as possible.</li>
            <li>Versatility: Crabby supports multiple programming paradigms, allowing you to choose the best approach for each task.</li>
            <li>Simplicity: Crabby is designed with simplicity in mind, making it easy to learn and understand.</li>
            <li>Philosophy: Crabby is built on the principles of simplicity, efficiency, and versatility, providing a powerful and flexible programming language.</li>
            <li>Math: Crabby is <strong>functional</strong>, which means it supports mathematical operations and functions. Things like lambda, map, filter, and reduce are all part of the language.</li>
          </ul>
          <Heading as="h3">Features</Heading>
          <ul>
            <li>Crabby designed for simplicity.</li>
            <li>Easy to learn and understand.</li>
            <li>Ideal for beginners.</li>
            <li>Powerful for handling complex tasks.</li>
            <li>Suitable for experienced developers too.</li>
          </ul>
          <Heading as="h3">Example Programs</Heading>
          <div className={styles.codeGrid}>
            <div>
              <Heading as="h4">helloword.crab</Heading>
              <pre>
                <code>{`print("hello world!")`}</code>
              </pre>
            </div>
          <div>
          <Heading as="h4">math.crab</Heading>
          <pre>
            <code>{`let x = 10
let y = 10

print(x + y)`}
            </code>
          </pre>
        </div>
        <div>
          <Heading as="h4">if-else.crab</Heading>
          <pre>
            <code>{`let x = true
let y = false

if x: {
  print("True!")
} else {
  print("False!")
}`}
            </code>
          </pre>
        </div>
        <div>
          <Heading as="h4">lambda.crab</Heading>
          <pre>
            <code>{`let x = lambda(a): {
  return a + 10
}

print(x(5))`}
            </code>
          </pre>
        </div>
      </div>
       <p>
        You can visit the <a href="https://github.com/crabby-lang/crabby.git" target="_blank" rel="noopener noreferrer">Crabby Repo</a> to see more examples.
       </p>
      </section>
     </main>
    </Layout>
  );
}
