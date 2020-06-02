import React from 'react';
import tabs from './tabs.twig';
import tabData from './tabs.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Tabs' };

export const tabsExample = () => {
  return <div dangerouslySetInnerHTML={{ __html: tabs(tabData) }} />;
};
