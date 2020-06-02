import React from 'react';

import breadcrumb from './breadcrumbs/breadcrumbs.twig';

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => (
  <div dangerouslySetInnerHTML={{ __html: breadcrumb(breadcrumbsData) }} />
);
