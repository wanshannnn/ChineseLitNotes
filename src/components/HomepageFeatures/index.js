import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '笔记',
    Svg: null,
    description: (
      <>
        你可以浏览中文系本科课程的学习笔记。
      </>
    ),
  },
  {
    title: '发表',
    Svg: null,
    description: (
      <>
        你可以发表你的观点、补充知识或提问。
      </>
    ),
  },
  {
    title: '交友',
    Svg: null,
    description: (
      <>
       你可以认识其他中文系的同学。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
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
