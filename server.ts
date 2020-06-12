import { Application } from "./deps.ts";
import router from "./routes/user.ts";

const app = new Application();

const env = Deno.env.toObject();

const host: string = env.HOST || "127.0.0.1";
const port = env.PORT || 3001;

app.use(router.routes());
app.listen(`${host}:${port}`);
console.log(`Server started: http://${host}:${port}`);
