// Button.stories.js|jsx

import React from 'react'

import LoadingDots from './index'

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Loading Dots',
    component: LoadingDots,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <LoadingDots {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
