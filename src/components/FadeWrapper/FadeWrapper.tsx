import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { FadeBox } from './style';

interface Props<T, K> {
  children: React.ReactNode | ((data: T) => React.ReactNode);
  data: T;
  duration: number;
  trigger: K;
}

export const FadeWrapper = <T, K>({ children, data, trigger, duration }: Props<T, K>) => {
  const elementRef = useRef(null);
  const [currentTrigger, setCurrentTrigger] = useState(trigger);
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    if (currentTrigger !== trigger) {
      gsap.to(elementRef.current, {
        opacity: 0,
        duration: duration,
        onComplete: () => {
          setCurrentData(data);
          setCurrentTrigger(trigger);
          gsap.to(elementRef.current, {
            opacity: 1,
            duration,
          });
        },
      });
    }
  }, [data, trigger, currentTrigger, duration]);

  return <FadeBox ref={elementRef}>{
    typeof children === 'function' ? children(currentData) : children
  }</FadeBox>;
};
