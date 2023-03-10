// Button.stories.js|jsx

import React from 'react'
import CheckBox from './index'

export default {
    /* ๐ The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'inputs/CheckBox',
    component: CheckBox,
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <CheckBox {...args} />

// ๐ Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
    variant: 'secondary',
    className: 'bg-primary',
    disabled: false,
}
