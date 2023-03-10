// Button.stories.js|jsx

import React from 'react'

import LoadingDots from './index'

export default {
    /* ๐ The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Loading Dots',
    component: LoadingDots,
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <LoadingDots {...args} />

// ๐ Each story then reuses that template
export const Default = Template.bind({})
