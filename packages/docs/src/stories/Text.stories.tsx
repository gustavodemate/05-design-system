import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'
import { size } from 'polished'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus deleniti ipsam qui blanditiis. Culpa voluptates ut consequuntur est animi, assumenda tenetur, sed perferendis, quas tempora minus et nisi natus.',
        size: 'md',
    },

    argTypes: {
        size: {
            options: [ 
            'xxs',
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '4xl',
            '5xl',
            '6xl',
            '7xl',
            '8xl',
            '9xl',
        ],
            control: {
                type: 'inline-radio'
            }
        },
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',

        
    }
}



