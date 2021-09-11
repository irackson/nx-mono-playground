import { Story, Meta } from '@storybook/react';
import { Mycomps, MycompsProps } from './Mycomps';

export default {
    component: Mycomps,
    title: 'Mycomps',
} as Meta;

const Template: Story<MycompsProps> = (args) => <Mycomps {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
