import React from 'react';

import iconTwig from './icons/icons.twig';

import iconData from './icons/icons.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const icons = () => (
  <div dangerouslySetInnerHTML={{ __html: iconTwig(iconData) }} />
);
