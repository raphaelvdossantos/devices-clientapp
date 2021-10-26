import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { GlobalStyle } from "../src/styles";

export const decorators = [
  (Story) => (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Story />
      </Provider>
    </>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};