import React from 'react';

import ul from './ul.twig';

import ulDataBullet from './ul-bullet.yml';
import ulDataArrow from './ul-arrow.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const defaultList = () => (
  <div
    style={{ margin: '10px' }}
    dangerouslySetInnerHTML={{ __html: ul(ulDataBullet) }}
  />
);

export const arrowList = () => (
  <div
    style={{ margin: '10px' }}
    dangerouslySetInnerHTML={{ __html: ul(ulDataArrow) }}
  />
);
