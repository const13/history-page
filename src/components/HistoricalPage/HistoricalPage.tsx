import React, { useState } from 'react';
import { YearsCounter } from '../YearsCounter/YearsCounter';
import { eventsData } from '../../mocks/data';
import { DateEventType } from '../../types';
import {
  Circle,
  HistoricalPageWrapper,
  HLine,
  Title,
  VLine
} from './style';
import { Gallery } from '../Gallery';

export const HistoricalPage = () => {
  const [filter, setFilter] = useState<DateEventType>('birthday');

  const filteredData = eventsData
    .filter(item => item.type === filter)
    .sort((a, b) => a.date - b.date);
  const [minYear, maxYear] = [
    Math.min(...filteredData.map(i => i.date)),
    Math.max(...filteredData.map(i => i.date))
  ];

  return (
    <HistoricalPageWrapper onClick={() => setFilter('wars')}>
      <VLine />
      <HLine />
      <Title>Исторические даты</Title>
      <Circle />
      <YearsCounter minValue={minYear} maxValue={maxYear} />
      <Gallery data={filteredData} />
    </HistoricalPageWrapper>
  );
}