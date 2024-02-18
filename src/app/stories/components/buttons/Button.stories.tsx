import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
	onClick: (e)=>{return e}
  },
};

export const Secondary: Story = {
  args: {
	variant: 'secondary',
    label: 'Button',
	onClick: (e)=>{return e}
  },
};

export const Large: Story = {
  args: {
	variant: 'warning',
    label: 'Button',
	onClick: (e)=>{return e}
  },
};

export const Small: Story = {
  args: {
	variant: 'dark',
    label: 'Button',
	onClick: (e)=>{return e}
  },
};


export const Warning: Story = {
    args: {
		variant: 'primary',
		label: 'Delete now',
	onClick: (e)=>{return e}

    }
  };