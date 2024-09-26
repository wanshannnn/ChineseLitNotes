import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

const FeatureList = [
  {
    title: '复习笔记',
    Svg: null,
    description: (
      <>
        你可以在口袋书的各个课程的文档中阅读笔记，利用碎片时间高效复习课程知识。
      </>
    ),
  },
  {
    title: '发表评论',
    Svg: null,
    description: (
      <>
        你可以在每个文档下方的评论区补充知识点、发表观点，为口袋书增加新的内容，启发后来的学习者。
      </>
    ),
  },
  {
    title: '交流经验',
    Svg: null,
    description: (
      <>
        你可以在交流区中分享学习经验、交流学校生活，并且你可以尝试在这里结交同专业的新朋友。
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