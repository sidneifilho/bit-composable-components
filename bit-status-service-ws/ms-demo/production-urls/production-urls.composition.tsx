import React from 'react';
import { productionUrls } from './production-urls';

export function ReturnsCorrectValue() {
  return <div><pre>{JSON.stringify(productionUrls(), null, 2)}</pre></div>;
}
