import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageTransition = ({ to, children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 300); // Simulate loading time (adjust as needed)

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  useEffect(() => {
    if (to && showContent) {
      navigate(to);
    }
  }, [to, navigate, showContent]);

  return (
    <div>
      {loading && (
        <div className=" fixed inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {showContent && children}
    </div>
  );
};

export default PageTransition;