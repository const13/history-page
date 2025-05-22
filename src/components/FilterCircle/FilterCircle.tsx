import React, { useEffect, useState } from 'react';
import { DateEventType, DateEventTypeObj } from '../../types';

import { Circle, Point, PointWrapper, IndexText, FilterName } from './style';
import { useGlobalContext } from '../../context';
import { useViewportWidth } from '../../hooks';

type PointData = {
  index: number,
  name: DateEventType
}

type PointType = {
  x: number,
  y: number,
  data: PointData
}

interface Props {
  filters: typeof DateEventTypeObj;
}

export const FilterCircle = ({ filters }: Props) => {
  const filtersArr = Object.keys(filters) as DateEventType[];
  const filtersLength = filtersArr.length;
  const { activeFilter, setActiveFilter } = useGlobalContext();
  const indexActiveFilter = filtersArr.indexOf(activeFilter);
  const [width, height] = useViewportWidth();
  const diameter = Math.min(width, height) / 2;
  const radius = diameter / 2;
  const [rotAngle, setRotAngle] = useState(360 / filtersLength * (indexActiveFilter + 1));

  useEffect(() => {
    setRotAngle(360 / filtersLength * (indexActiveFilter));
  }, [indexActiveFilter, filtersLength]);

  const points: PointType[] = filtersArr.map((filterName, index) => {
    const angle = Math.PI * 2 * index / filtersLength + 210 * (Math.PI / 180);
    return {
      x: radius + radius * Math.sin(angle),
      y: radius + radius * Math.cos(angle),
      data: {
        index,
        name: filterName
      }
    }
  });

  return (
    <Circle $angle={rotAngle} style={{ height: diameter, width: diameter }}>
      {points.map(({ data, x, y }, i) => {
        return <PointWrapper
          key={data.name}
          style={{ right: `${x}px`, top: `${y}px` }}
          className={`${indexActiveFilter === i && 'active'}`}
        >
          <Point $angle={rotAngle} onClick={() => setActiveFilter(filtersArr[i])}>
            <IndexText>{i + 1}</IndexText>
            <FilterName>{filters[data.name]}</FilterName>
          </Point>
        </PointWrapper>
      })}
    </Circle >
  );
}