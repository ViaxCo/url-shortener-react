const styles = {
  global: {
    //   My resets
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "*": {
      margin: "0",
      padding: "0",
      WebkitTapHighlightColor: "transparent",
    },
    // styles for the `html` and `body`
    "html,body": {
      minWidth: "fit-content",
    },
  },
};

export default styles;
