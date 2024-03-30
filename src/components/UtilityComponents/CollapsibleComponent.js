import React, { useState } from 'react';

const CollapsibleComponent = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible-component">
      <div className="collapsible-header" onClick={toggleCollapse}>
        {title}
      </div>
      {!isCollapsed && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleComponent;
