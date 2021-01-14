const getEnvironment = (): "production" | "development" => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
};

export default getEnvironment;
