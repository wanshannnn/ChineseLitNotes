import React, { useEffect } from 'react';
import Valine from 'valine';

type ViewCountProps = {
    path: string;
};

const ViewCount: React.FC<ViewCountProps> = ({ path }) => {
    useEffect(() => {
        new Valine({
            el: '#vcomments',
            appId: 'd13HR3a64pIVe8WFPOInFj0q-gzGzoHsz',
            appKey: '5GmVxEuMonJNckhjA7JsF5iC',
            visitor: true,
        });
    }, [path]);

    return (
        <span id={path} className="valine_visitors" data-flag-title="ChineseLitNotes">
        <em className="visitors-count">阅读量：</em>
        <i className="visitors-count">0</i>
        </span>
    );
};

export default ViewCount;
