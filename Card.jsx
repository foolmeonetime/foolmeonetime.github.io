import React from 'react';

const Card = ({ children, className, ...rest }) => {
  return (
    <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...rest }) => {
  return (
    <div className={`bg-gray-100 rounded-t-md p-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className, ...rest }) => {
  return (
    <h2 className={`text-xl font-bold mb-2 ${className}`} {...rest}>
      {children}
    </h2>
  );
};

const CardContent = ({ children, className, ...rest }) => {
  return (
    <div className={`p-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };
