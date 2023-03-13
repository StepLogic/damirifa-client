// Button.stories.js|jsx

import React from "react";
import {AiOutlineCheck} from "react-icons/ai";
import Button from "./index";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "dashboard/UI/Button",
    component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args}>Hello</Button>;

const IconTemplate = (args) => (
    <Button {...args}>
        <AiOutlineCheck/>
    </Button>
); // 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    variant: "fill",
    label: "Button",
    className: "bg-primary",
    disbaled: false,
    outline: false,
    size: "md",
    loading: false,
    pill: false,
};
export const Icon = IconTemplate.bind({});
Icon.args = {
    variant: "icon",
    disbaled: false,
    color: "primary",
    size: "lg",
    loading: false,
    pill: false,
};
export const Outline = Template.bind({});
Outline.args = {
    variant: "outline",
    disbaled: false,
    color: "primary",
    size: "lg",
    loading: false,
    pill: false,
};
