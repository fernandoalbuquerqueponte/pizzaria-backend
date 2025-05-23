import { Router } from "express";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { UserDetailsController } from "./controllers/user/UserDetailsController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

import { isUserAuthenticated } from "./middlewares/isUserAuthenticated";

const router = Router();

//-- ROTAS USER --

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isUserAuthenticated, new UserDetailsController().handle);

// -- ROTAS CATEGORY --

router.post(
  "/category",
  isUserAuthenticated,
  new CreateCategoryController().handle
);

export { router };
