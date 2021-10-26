import AddDevice from "./addDevice";

export default {
    title: "Components/AddDevice",
    component: AddDevice
};

const Template = args => <AddDevice {...args} />;

export const EmptyAddDevie = Template.bind({});