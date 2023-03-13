// Button.stories.js|jsx

import React, {useState} from "react";
import {AiOutlineBars} from "react-icons/ai";
import Dropdown from "./index";
import Button from "../button";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Dropdown",
    component: Dropdown,
};

//👇 We create a “template” of how args map to rendering

const Template = (args) => {
    const [show, toggle] = useState();
    return (
        <Dropdown {...args} show={show} toggle={toggle}>
            <Dropdown.Toggle>
                <Button
                    variant="primary"
                    icon={true}
                    size="sm"
                    onClick={() => toggle((prev) => !prev)}
                >
                    <AiOutlineBars/>
                </Button>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Hello</Dropdown.Item>
                <Dropdown.Item>Hello</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export const Default = Template.bind({});
Default.args = {
    variant: "search",
};
