const isProduction = process.env.NODE_ENV === "production";

const devApiConfig = {
  baseUrl: "http://localhost:3000",
};

const prodApiConfig = {
  baseUrl: "",
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
