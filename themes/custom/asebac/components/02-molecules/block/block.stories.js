import React from 'react';

import block from './block.twig';

import blockData from './block.yml';
import blockTitleData from './block-title.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Block' };

export const basicBlock = () => (
  <div dangerouslySetInnerHTML={{ __html: block(blockData) }} />
);

export const basicBlockTitle = () => (
  <div dangerouslySetInnerHTML={{ __html: block(blockTitleData) }} />
);
