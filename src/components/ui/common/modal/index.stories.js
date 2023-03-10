// Button.stories.js|jsx

import React from 'react'
import Modal from './index'

export default {
    /* ๐ The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Modal',
    component: Modal,
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Modal{...args} />

// ๐ Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
    options: ['hello', 'hello'],
}
