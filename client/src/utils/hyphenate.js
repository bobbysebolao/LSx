const hyphenate = endpoint => {
  if (endpoint.includes(" ")) {
    return endpoint.replace(" ", "-");
  }
};

export default hyphenate;
