import { str, port, cleanEnv } from 'envalid'

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_URI: str(),
    PORT: port(),
  });
}

export default validateEnv