/* eslint-disable camelcase */
import React from 'react';

import { withKnobs, text } from '@storybook/addon-knobs';

import headings from './headings.twig';
import blockquote from './blockquote.twig';
import paragraph from './paragraph.twig';

import blockquoteData from './blockquote.yml';
import blockquoteDataLarge from './blockquote-large.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text', decorators: [withKnobs] };

// Heading Example
export const headingsExamples = () => {
  const textExample = text('Heading Example', 'Heading Example');
  return (
    <div dangerouslySetInnerHTML={{ __html: headings({ textExample }) }} />
  );
};

// Paragraph Example
export const ParagraphExample = () => {
  const paragraph_content = text('Paragraph Example', 'Paragraph Example');
  return (
    <div
      dangerouslySetInnerHTML={{ __html: paragraph({ paragraph_content }) }}
    />
  );
};

export const blockquoteExample = () => (
  <div dangerouslySetInnerHTML={{ __html: blockquote(blockquoteData) }} />
);

// Blockquote Large Example
export const blockquoteLargeExample = () => (
  <div dangerouslySetInnerHTML={{ __html: blockquote(blockquoteDataLarge) }} />
);
