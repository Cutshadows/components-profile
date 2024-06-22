import type { Meta, StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import { Label } from '../../../../components';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'components/Label',
	component: Label,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
	parameters: {
		layout: 'centered',
		docs: {
			toc: true,
			page: () => (
				<>
					<DocBlock.Title />
					<DocBlock.Source />
					<DocBlock.Description />
					<DocBlock.Controls />
					<DocBlock.Primary />
					<DocBlock.Stories />
				</>
			),
		}
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Preview: Story = {
  args: {
//     // variant: 'primary',
//     // label: 'Button',
	text: 'Test Label',
  },
};