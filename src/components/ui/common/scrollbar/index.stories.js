// Button.stories.js|jsx

import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import Button from './index'

export default {
    /* ๐ The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    component: Button,
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => (
    <Button {...args}>
        <AiOutlineCheck/>
    </Button>
)

// ๐ Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    label: 'Button',
    className: 'bg-primary',
    disbaled: false,
    outline: false,
    size: 'lg',
    loading: false,
    pill: false,
    icon: false,
}
export const Icon = Template.bind({})
Icon.args = {
    variant: 'primary',
    className: 'bg-primary',
    disbaled: false,
    outline: false,
    size: 'lg',
    loading: false,
    pill: false,
    icon: false,
}
