import React, { useMemo } from 'react';

import { eventsData } from '../../mocks/data';
import { useGlobalContext } from '../../context';
import { DateEventTypeObj } from '../../types';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { animationDuration } from '../../theme';

import { YearsCounter } from '../YearsCounter/YearsCounter';
import { Gallery } from '../Gallery';
import { FilterBtn } from '../FilterBtn';
import { FilterCircle } from '../FilterCircle';
import { FadeWrapper } from '../FadeWrapper';
import {
  HistoricalPageWrapper,
  HLine,
  Title,
  VLine
} from './style';

export const HistoricalPage = () => {
  const { activeFilter } = useGlobalContext();
  const isMobile = useIsMobile();

  const filteredData = useMemo(() =>
    eventsData
      .filter(item => item.type === activeFilter)
      .sort((a, b) => a.date - b.date),
    [activeFilter]
  );

  const [minYear, maxYear] = useMemo(() => [
    Math.min(...filteredData.map(i => i.date)),
    Math.max(...filteredData.map(i => i.date))
  ], [filteredData]);

  return (
    <HistoricalPageWrapper>
      {!isMobile && <VLine />}
      <HLine />
      <Title>Исторические даты</Title>

      {!isMobile && <FilterCircle filters={DateEventTypeObj} />}

      <YearsCounter minValue={minYear} maxValue={maxYear} />

      <FadeWrapper
        trigger={activeFilter}
        duration={animationDuration}
        data={filteredData}
      >
        {(data) => <Gallery data={data} />}
      </FadeWrapper>

      <FilterBtn filters={DateEventTypeObj} />
    </HistoricalPageWrapper>
  );
}