const isProduction = import.meta.env.VITE_ENV === "production";

const devApiConfig = {
  baseUrl: "http://localhost:3000",
};

const prodApiConfig = {
  baseUrl: import.meta.env.VITE_URL,
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
