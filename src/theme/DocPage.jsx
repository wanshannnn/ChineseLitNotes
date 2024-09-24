import React, { useEffect } from 'react';
import DocPage from '@theme-original/DocPage';

export default function DocPageWithComments(props) {
  useEffect(() => {
    const initValine = () => {
      const commentsContainer = document.getElementById('vcomments');
      if (!commentsContainer) {
        return;
      }

      new window.Valine({
        el: '#vcomments',
        appId: 'd13HR3a64pIVe8WFPOInFj0q-gzGzoHsz',
        appKey: '5GmVxEuMonJNckhjA7JsF5iC',
        path: window.location.pathname,
        placeholder: '在这里输入评论...',
      });

    };

    if (!window.Valine) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/valine/dist/Valine.min.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initValine();
      };

    } else {
      initValine();
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://unpkg.com/valine/dist/Valine.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <DocPage {...props} />
      <div id="vcomments" style={{ marginTop: '2rem' }}></div>
    </>
  );
}
