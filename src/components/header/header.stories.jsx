import Header from "./header";

export default {
    title: "Components/Header",
    component: Header
};

const Template = args => <Header {...args} />;

export const DefaultHeader = Template.bind({});