import { Router } from "express";

import { UserDetailsController } from "./controllers/user/UserDetailsController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

import { isUserAuthenticated } from "./middlewares/isUserAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isUserAuthenticated, new UserDetailsController().handle);

export { router };
