import React from 'react';

import card from './card.twig';

import cardData from './card.yml';
import cardAltData from './card-alt.yml';
import cardBorderData from './card-border.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const cardExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />
);

export const cardAltExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardAltData) }} />
);

export const cardBorderExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardBorderData) }} />
);
