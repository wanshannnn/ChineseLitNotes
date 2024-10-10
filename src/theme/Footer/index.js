import React from 'react';
import ViewCount from '../../components/HomepageFeatures/ViewCount';

const CustomFooter = () => {
  return (
    <footer style={{ backgroundColor: '#333', padding: '1rem', color: '#fff', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>
        Copyright © {new Date().getFullYear()} ChineseLitNotes. All Rights Reserved.
      </p>
      <div id="footer-view-count">
        {typeof window !== 'undefined' && (
          <ViewCount path={window.location.pathname} />
        )}
      </div>
    </footer>
  );
};

export default CustomFooter;