import dotenv from "dotenv";

dotenv.config();

const readEnv = (key, fallback) => {
  const value = process.env[key];
  if (typeof value === "string" && value.trim() !== "") {
    return value;
  }
  return fallback;
};

export const configenv = {
  NODE_ENV: readEnv("NODE_ENV", "development"),
  PORT: process.env.PORT || 3000,
  FE_PORT: readEnv("FE_PORT", "*"),
  MONGODB_URI: readEnv("MONGODB_URI"),
  JWT_SECRET: readEnv("JWT_SECRET"),
  JWT_REFRESH_SECRET: readEnv("JWT_REFRESH_SECRET"),
  RESET_PASSWORD_SECRET: readEnv("RESET_PASSWORD_SECRET"),
  RESET_PASSWORD_EXPIRE: readEnv("RESET_PASSWORD_EXPIRE"),
  EMAIL_HOST: readEnv("EMAIL_HOST"),
  EMAIL_PASSWORD: readEnv("EMAIL_PASSWORD"),
};
