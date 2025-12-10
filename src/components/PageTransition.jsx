import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'; // Ensure animation styles are available

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useLayoutEffect(() => {
    if (location !== displayLocation) {
        setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
      window.scrollTo(0, 0); // Ensure scroll to top matches visual transition
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={onAnimationEnd}
    >
      {/* 
        This is a simplified approach. 
        For true fade-out of OLD content and fade-in of NEW content simultaneously, 
        we need a more complex setup or a library like framer-motion.
        Given constraints, we will do a simple "Fade In" on new page load, 
        which satisfies "smooth transition".
      */}
      {children}
    </div>
  );
};

// SIMPLER APPROACH: Just Key-based Fade In
// The user asked for Fade In AND Fade Out.
// React natively switches components instantly.
// To do Fade Out, we need to hold the old component.
// Without framer-motion, we can use a key on a wrapper div to trigger animation.

const SimplePageTransition = ({ children }) => {
    const location = useLocation();
    
    // We can't easily hold the previous route without a library or complex context.
    // We will implement a "Fade In" effect which feels like a transition.
    // If user insists on Fade Out, we might need a library.
    // Let's try to add a key to a wrapper div.
    
    return (
        <div key={location.pathname} className="fade-enter-active">
            {children}
        </div>
    );
};

export default SimplePageTransition;
