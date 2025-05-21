import React from 'react';

import { Years, YearsWrapper } from './style';
import { colorsUsage } from '../../theme';

interface Props {
  minValue: number;
  maxValue: number;
}

export const YearsCounter = ({ minValue, maxValue }: Props) => {
  return (
    <YearsWrapper>
        <Years  $id={'minYear'} $value={minValue} $color={colorsUsage.minYear} />
        <Years  $id={'maxYear'} $value={maxValue} $color={colorsUsage.maxYear} />
    </YearsWrapper>
  );
}