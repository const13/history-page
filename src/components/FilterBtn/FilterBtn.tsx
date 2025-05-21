import React from 'react';
import { DateEventType, DateEventTypeObj } from '../../types';

import { BtnGroup, Counter, Next, Prev, Wrapper } from './style';
import { useGlobalContext } from '../../context';

interface Props {
  filters: typeof DateEventTypeObj;
}

export const FilterBtn = ({ filters }: Props) => {
  const filtersArr = Object.keys(filters) as DateEventType[];
  const filtersLength = filtersArr.length;
  const { activeFilter, setActiveFilter } = useGlobalContext();

  const indexActiveFilter = filtersArr.indexOf(activeFilter);
  const isDisabledPrev = indexActiveFilter === 0;
  const isDisabledNext = indexActiveFilter + 1 === filtersLength;
  const prev = () => !isDisabledPrev && (() => setActiveFilter(filtersArr[Math.max(0, indexActiveFilter - 1)]))();
  const next = () => !isDisabledNext && (() => setActiveFilter(filtersArr[Math.min(filtersLength - 1, indexActiveFilter + 1)]))();

  return (
    <Wrapper>
      <Counter>0{indexActiveFilter + 1}/0{filtersLength}</Counter>
      <BtnGroup>
        <Prev onClick={prev} className={`${isDisabledPrev && 'disabled'}`} />
        <Next onClick={next} className={`${isDisabledNext && 'disabled'}`} />
      </BtnGroup>
    </Wrapper>
  );
}