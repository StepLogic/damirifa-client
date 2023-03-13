// Button.stories.js|jsx

import React from 'react'
import Modal from './index'

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Modal',
    component: Modal,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Modal{...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
    options: ['hello', 'hello'],
}
