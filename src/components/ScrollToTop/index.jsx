import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Oval } from  'react-loader-spinner'

import './styles.css';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function delay(){
    setTimeout(function(){
      setLoading(false)
    }, 1000); 
  }

  useEffect(() => {
    setLoading(true)
    delay()
  }, [pathname]);

  return loading ? <div className="loading-bg"><Oval height="100" width="100" color='white' secondaryColor="grey"/></div> : null;
}