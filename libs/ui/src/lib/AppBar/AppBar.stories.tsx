import { Story, Meta } from '@storybook/react';
import { AppBar } from './AppBar';

export default {
  component: AppBar,
  title: 'AppBar',
} as Meta;

const Template: Story = (args) => <AppBar color="primary" isAuth {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isAuth: true,
};
