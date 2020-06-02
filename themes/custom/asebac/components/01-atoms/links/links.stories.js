import React from 'react';

import link from './link.twig';
import linkNav from './_link.twig';

import linkData from './link.yml';
import linkNavData from './links.yml';
import EmailData from './email.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const Link = () => (
  <div dangerouslySetInnerHTML={{ __html: link(linkData) }} />
);

export const Email = () => (
  <div dangerouslySetInnerHTML={{ __html: link(EmailData) }} />
);

export const LinkNav = () => {
  return <div dangerouslySetInnerHTML={{ __html: linkNav(linkNavData) }} />;
};
