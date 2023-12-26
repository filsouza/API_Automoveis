import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  console.warn("AVISO: Arquivo .env não encontrado. Certifique-se de ter configurado as variáveis de ambiente.");
}

interface Config {
  PORT: number;
  api: {
    prefix: string;
  };
}

const config: Config = {
  PORT: parseInt(process.env.PORT ?? "4000", 10),
  api: {
    prefix: process.env.API_PREFIX ?? "/api",
  },
};

export default config;
