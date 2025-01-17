import { itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import NotificationContainer from './NotificationContainer';

const defaultProps = {
  notification: { id: 'test', message: 'test-message' },
  onHide: () => {},
  autoClose: false,
} as const;

describe('@mantine/notifications/NotificationContainer', () => {
  itSupportsStyle(NotificationContainer, defaultProps);
  itSupportsClassName(NotificationContainer, defaultProps);

  it('has correct displayName', () => {
    expect(NotificationContainer.displayName).toEqual(
      '@mantine/notifications/NotificationContainer'
    );
  });
});
