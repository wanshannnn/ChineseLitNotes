import React, { useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import Valine from 'valine'

type DocItemProps = {
    title: string;
    content: string;
};

const DocItem: React.FC<DocItemProps> = (props) => {
    useEffect(() => {
        const initValine = () => {
            new Valine({
                el: '#vcomments',
                appId: 'd13HR3a64pIVe8WFPOInFj0q-gzGzoHsz',
                appKey: '5GmVxEuMonJNckhjA7JsF5iC',
                path: window.location.pathname,
                placeholder: '在这里输入评论...',
            });
        };
        if (Valine) {
            initValine();
        }
    }, []);

    return (
        <>
            <OriginalDocItem {...props} />
            <div id="vcomments" style={{ marginTop: '2rem' }}></div>
        </>
    );
}

export default DocItem;
