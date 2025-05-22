import React, { useEffect, useState } from 'react';

import { Years, YearsWrapper } from './style';
import { colorsUsage } from '../../theme';

interface Props {
  minValue: number;
  maxValue: number;
}

export const YearsCounter = ({ minValue, maxValue }: Props) => {
  return (
    <YearsWrapper>
      <Years $color={colorsUsage.minYear}><Counter toNumber={minValue} /></Years>
      <Years $color={colorsUsage.maxYear}><Counter toNumber={maxValue} /></Years>
    </YearsWrapper>
  );
}

const duration = 300;

interface CounterProps {
  toNumber: number
}

const Counter = ({ toNumber }: CounterProps) => {
  const [count, setCount] = useState(toNumber);

  useEffect(() => {
    const diff = Math.abs(toNumber - count);
    let interval = Math.min(150, duration / diff);

    const intervalId = setInterval(() => {
      if (toNumber > count) {
        setCount(prevCount => prevCount + 1);
      } else if (toNumber < count) {
        setCount(prevCount => prevCount - 1);
      }
    }, interval);
    if (count === toNumber) clearInterval(intervalId);
    return () => clearInterval(intervalId);
  }, [toNumber, count]);

  return (<>{count}</>);
}