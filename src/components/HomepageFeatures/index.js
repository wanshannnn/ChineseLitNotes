import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '复习笔记',
    Svg: null,
    description: (
      <>
        你可以在口袋书的各个课程的文档中阅读笔记，利用碎片时间复习课程知识。
      </>
    ),
  },
  {
    title: '发表评论',
    Svg: null,
    description: (
      <>
        你可以在每个文档下方的评论区补充知识点、发表观点，为口袋书增加新的内容。
      </>
    ),
  },
  {
    title: '交流话题',
    Svg: null,
    description: (
      <>
        你可以在交流论坛中讨论与中文系学习、生活相关的任何话题，并结交新的朋友。
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
