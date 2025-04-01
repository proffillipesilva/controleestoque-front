import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideFeedback } from '../../features/feedback/feedback-slice';
import errorIcon from '../../images/icons8-error-symbol.json'
import checkIcon from '../../images/icons8-check.json'
import loadingImage from '../../images/loading-anim.json';
import Lottie from 'lottie-react';

const FeedbackModal = () => {
  const { type, message, show } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show ) {
      const timer = setTimeout(() => {
         dispatch(hideFeedback());
      }, 1000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);

  if(type === 'loading')
    return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
    <Lottie animationData={loadingImage} loop={false} className="mx-auto h-16 w-16" />
   
      </div>
    </div>
    )

  else if (!show) return null;

  
  


  else return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {type === 'success' && (
          <Lottie animationData={checkIcon} loop={false} className="mx-auto h-16 w-16" />
        )}
        {type === 'error' && (
          <Lottie animationData={errorIcon}  loop={false} className="mx-auto h-16 w-16" />
        )}
       
        <p className="mt-4 text-center">{message}</p>
      </div>
    </div>
  );
};

export default FeedbackModal;