const isProduction = import.meta.env.VITE_ENV === "production";

const devApiConfig = {
  baseUrl: "http://localhost:3000",
};

const prodApiConfig = {
  baseUrl: "https://api.dewetour.sabrinasm.com",
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
