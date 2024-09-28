import React, { useEffect } from 'react';

export default function ViewCount({ path }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Valine) {
      new window.Valine({
        el: '#vcomments',
        appId: 'd13HR3a64pIVe8WFPOInFj0q-gzGzoHsz',
        appKey: '5GmVxEuMonJNckhjA7JsF5iC',
        visitor: true,
      });
    }
  }, [path]);

  return (
    <span id={path} className="leancloud_visitors" data-flag-title="Your Article Title">
      <em className="post-meta-item-text">阅读量：</em>
      <i className="leancloud-visitors-count">0</i>
    </span>
  );
}