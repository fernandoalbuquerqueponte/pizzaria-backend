import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { UserDetailsController } from "./controllers/user/UserDetailsController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

import { isUserAuthenticated } from "./middlewares/isUserAuthenticated";

import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

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

router.get(
  "/category",
  isUserAuthenticated,
  new ListCategoryController().handle
);

// -- ROTAS PRODUCT

router.post(
  "/product",
  isUserAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isUserAuthenticated,
  new ListByCategoryController().handle
);

// -- ROTAS ORDER

router.post("/order", isUserAuthenticated, new CreateOrderController().handle);

export { router };
