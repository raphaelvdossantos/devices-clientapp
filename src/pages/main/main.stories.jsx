import Main from "./main";

export default {
    title: "Pages/Main",
    component: Main
};

const Template = args => <Main {...args} />;

export const MainPage = Template.bind({});