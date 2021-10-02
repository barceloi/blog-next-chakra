import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const overrides = {
  ...chakraTheme.fonts,
  body: 'Open Sans', sans-serif',
  heading: 'Open Sans', sans-serif',
};

const customTheme = extendTheme(overrides);

export default customTheme;

function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
  );
}
