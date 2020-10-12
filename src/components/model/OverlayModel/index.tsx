import React, {useCallback, useLayoutEffect, useState} from 'react';
import { useTransform } from 'framer-motion';
import { CarModel } from '../modelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
  model: CarModel
}

type SectionDimension = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight' >

const OverlayModel: React.FC<Props> = ({ model, children }) => {
  
  
  const getSectionDimension = useCallback(
    () => {
      return {
        offsetTop: model.sectionRef.current?.offsetTop,
        offsetHeight: model.sectionRef.current?.offsetHeight
        
      } as SectionDimension
      
    },[model.sectionRef])
    const [dimension, setDimension] = useState<SectionDimension>(getSectionDimension())
    
    useLayoutEffect(()=> {
      function onRiseze() {
        window.requestAnimationFrame(() => setDimension(getSectionDimension()))
      }
      window.addEventListener('resize', onRiseze)
      return () => window.removeEventListener('resize', onRiseze)
    },[getSectionDimension])
    
    const {scrollY} = useWrapperScroll()
 

    const sectionScroll = useTransform(scrollY, y => (y - dimension.offsetTop) / dimension.offsetHeight)
    const opacity = useTransform(
      sectionScroll,
      [-0.5, -0.08, 0.08, 0.3],
      [0, 1, 1, 0]
    )
  
    const pointerEvents = useTransform(opacity, value => 
      value > 0 ? 'auto': 'none'  
    )

  return <Container style={{opacity, pointerEvents}}>{children}</Container>;
};

export default OverlayModel;
