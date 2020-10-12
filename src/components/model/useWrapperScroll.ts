import { useContext, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

import ModelContext from './modelsContext';

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelContext);

  const scrollY = useMotionValue(0);
  const scrollProgresse = useMotionValue(0);


  
  useEffect(() => {
    const element = wrapperRef.current;
    if (element) {
      const updateScrollValue = () => {
        const {scrollTop, scrollHeight, offsetHeight} = element

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        console.log(scrollTop / fullScroll)
        scrollProgresse.set(scrollTop / fullScroll)
      };

      element.addEventListener('scroll', updateScrollValue);

      return () => element.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollY , scrollProgresse,wrapperRef]);

  return {scrollY, scrollProgresse}
}
