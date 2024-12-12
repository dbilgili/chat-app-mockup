const cls = (...params: (string | boolean | undefined)[]) => {
  let str = "";
  for (const param of params) {
    if (typeof param === "string") {
      str += param + " ";
    } else if (typeof param === "boolean" && param === true) {
      str += Object.keys({ param })[0] + " ";
    }
  }

  return str.trim();
};

export default cls;
