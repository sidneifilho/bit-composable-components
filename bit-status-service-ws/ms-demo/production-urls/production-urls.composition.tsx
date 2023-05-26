import React from 'react';
import { productionUrls } from './production-urls';

export function ReturnsCorrectValue() {
  return <div>{productionUrls()}</div>;
}
