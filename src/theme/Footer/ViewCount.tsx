import React, { useEffect } from 'react';

declare global {
    interface Window {
        Valine: any;
    }
}

type ViewCountProps = {
    path: string;
};

const ViewCount: React.FC<ViewCountProps> = ({ path }) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.Valine) {
            new window.Valine({
                el: '#vcomments',
                appId: 'wcVfAvrF4EziWk0SqEO45PkL-gzGzoHsz',
                appKey: 'Mi0ix1SmsqCTgNk2G8EHjUEG',
                visitor: true,
            });
        }
    }, [path]);

    return (
        <span id={path} className="leancloud_visitors" data-flag-title="ChineseLitNotes">
        <em className="post-meta-item-text">阅读量：</em>
        <i className="leancloud-visitors-count">0</i>
        </span>
    );
};

export default ViewCount;
