import { Story, Meta } from '@storybook/react';
import { Carousel, CarouselProps } from './Carousel';

export default {
    component: Carousel,
    title: 'Carousel',
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: '',
};
