import Dashboard from "./dashboard";

export default {
  title: "Containers/ Dashboard",
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;

export const DefaultDashboard = Template.bind({});
