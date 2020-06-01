import React from 'react';

import notification from './notification.twig';

import notificationData from './notification.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Notifications' };

export const Notification = () => (
  <div dangerouslySetInnerHTML={{ __html: notification(notificationData) }} />
);
