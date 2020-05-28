import React from 'react';

import button from './button.twig';

import buttonData from './button.yml';
import buttonAltData from './button-alt.yml';
import buttonOutlineData from './button-outline.yml';
import buttonDownloadData from './button-download.yml';
import buttonLinkData from './button-link.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const example = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />
);

export const exampleAlt = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonAltData) }} />
);

export const exampleOutline = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonOutlineData) }} />
);

export const exampleDownload = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonDownloadData) }} />
);

export const exampleLink = () => (
  <div dangerouslySetInnerHTML={{ __html: button(buttonLinkData) }} />
);
