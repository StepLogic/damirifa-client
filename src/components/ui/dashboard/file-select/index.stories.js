// Button.stories.js|jsx

import React from "react";
import FileSelect from "./index";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "dashboard/UI/TextField",
    component: FileSelect,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FileSelect {...args} />;
// 👇 Each story then reuses that template
export const Secondary = Template.bind({});
Secondary.args = {
    variant: "outline",
    color: "dark",
    label: "Announcement Subtitle",
};
