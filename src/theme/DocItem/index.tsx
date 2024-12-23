import React, { useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';

declare global {
    interface Window {
        Valine: any;
    }
}

type DocItemProps = {
};

const DocItem: React.FC<DocItemProps> = (props) => {
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
            script.onload = () => {
                console.log('Valine loaded successfully');
                initValine();
            };
            script.onerror = () => {
                console.error('Error loading Valine script');
            };
            document.body.appendChild(script);
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
            <OriginalDocItem {...props} />
            <div id="vcomments" style={{ marginTop: '2rem' }}></div>
        </>
    );
}

export default DocItem;