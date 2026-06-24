import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const styles = {
    scrollBehavior: "smooth"
  };

  useEffect(() => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: styles.scrollBehavior
      });
    } catch (error) {
      // Fallback for older browsers that don't support scrollOptions configurations
      window.scrollTo(0, 0);
    }
  }, [pathname, styles.scrollBehavior]);

  return null;
};

export default ScrollToTop;