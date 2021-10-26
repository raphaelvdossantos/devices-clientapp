import ContainerHeader from "./containerHeader";

export default {
    title: "Components/Container Header",
    component: ContainerHeader
};

const Template = args => <ContainerHeader {...args} />;

export const DashboardSelected = Template.bind({});
