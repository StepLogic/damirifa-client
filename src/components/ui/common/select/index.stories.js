// Button.stories.js|jsx

import React from 'react'
import InputDropdown from './index'

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'inputs/InputDropdown',
    component: InputDropdown,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <InputDropdown {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
    options: ['hello', 'hello'],
}
