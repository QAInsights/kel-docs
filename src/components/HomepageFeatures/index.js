import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI in your CLI',
    Svg: require('@site/static/img/undraw_command-line.svg').default,
    description: (
      <>
        With AI capabilities in CLI, you can automate repetitive tasks, enhance productivity, and make your CLI more intelligent and efficient.
      </>
    ),
  },
  {
    title: 'Multiple LLM support',
    Svg: require('@site/static/img/undraw_rocket.svg').default,
    description: (
      <>
        Supports OpenAI, Anthropic, and Ollama LLMs and OpenAI Assistants.
      </>
    ),
  },
  {
    title: 'Chat with your artifacts',
    Svg: require('@site/static/img/undraw_chat.svg').default,
    description: (
      <>
        Upload your file to your assistant and chat with your artifacts.
      </>
    ),
  },
  {
    title: 'Bring your own API key',
    Svg: require('@site/static/img/undraw_note.svg').default,
    description: (
      <>
        Bring OpenAI/Anthropic key and start using Kel. Other LLMs support is coming soon.
      </>
    ),
  },
  {
    title: 'Free and Open Source',
    Svg: require('@site/static/img/undraw_smiley-face.svg').default,
    description: (
      <>
        Absolutely free and open source. You can contribute to Kel on GitHub.
      </>
    ),
  },
  {
    title: 'Looking for support?',
    Svg: require('@site/static/img/undraw_person.svg').default,
    description: (
      <>
        Contact us for a support plan.
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
        <Heading as="h3">{title}</Heading>
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
