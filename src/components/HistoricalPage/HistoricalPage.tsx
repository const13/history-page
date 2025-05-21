import React, { useState } from 'react';

import { eventsData } from '../../mocks/data';
import { defaultCtx, GlobalContext } from '../../context';
import { DateEventType, DateEventTypeObj } from '../../types';
import { YearsCounter } from '../YearsCounter/YearsCounter';
import { Gallery } from '../Gallery';
import { FilterBtn } from '../FilterBtn';

import {
  Circle,
  HistoricalPageWrapper,
  HLine,
  Title,
  VLine
} from './style';

export const HistoricalPage = () => {
  const [activeFilter, setActiveFilter] = useState<DateEventType>(defaultCtx.activeFilter);

  const filteredData = eventsData
    .filter(item => item.type === activeFilter)
    .sort((a, b) => a.date - b.date);

  const [minYear, maxYear] = [
    Math.min(...filteredData.map(i => i.date)),
    Math.max(...filteredData.map(i => i.date))
  ];

  return (
    <GlobalContext.Provider value={{ activeFilter, setActiveFilter }}>
      <HistoricalPageWrapper>
        <VLine />
        <HLine />
        <Title>Исторические даты</Title>
        <Circle />
        <YearsCounter minValue={minYear} maxValue={maxYear} />
        <Gallery data={filteredData} />
        <FilterBtn filters={DateEventTypeObj} />
      </HistoricalPageWrapper>
    </GlobalContext.Provider>
  );
}