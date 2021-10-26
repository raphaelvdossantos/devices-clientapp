import Device from "./device";

export default {
    title: "Components/Device",
    component: Device
};

const Template = args => <Device {...args} />;

export const WindowsDevice = Template.bind({});
WindowsDevice.args = {
    type: "Windows Workstation",
    name: "SUSAN-DESKTOP",
    capacity: "128GB"
};

export const MacDevice = Template.bind({});
MacDevice.args = {
    type: "Mac",
    name: "MAC-LOCAL-FREDDY",
    capacity: "256GB"
};
