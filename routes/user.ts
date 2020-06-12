import { Router } from "../deps.ts";
import { getAllUsers } from "../controller/user.ts";

const router = new Router();

router.get("/api/hello", (ctx) => {
  ctx.response.body = "hello world!";
});

router.get("/api/users", getAllUsers);

export default router;
