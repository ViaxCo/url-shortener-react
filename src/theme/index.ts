import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

const overrides = {
  styles,
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
  },
};

export default extendTheme(overrides);
