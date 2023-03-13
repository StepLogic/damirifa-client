// Button.stories.js|jsx

import React from 'react'
import Component from './index'

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'cards/Landing Page Package',
    component: Component,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Component {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
    variant: 'primary',
    className: 'bg-primary',
    disabled: false,
    href: '#',
    src: '/constants/special-announcement.png',
    // checked: false,
}
