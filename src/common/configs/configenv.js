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
  PORT: readEnv("PORT", 3000),
  MONGODB_URI: readEnv(
    "MONGODB_URI",
    "mongodb://localhost:27017/fs25091-nodejs"
  ),
  JWT_SECRET: readEnv("JWT_SECRET"),
  JWT_REFRESH_SECRET: readEnv("JWT_REFRESH_SECRET"),
};
