import { Router } from "express";
import { asyncHandlerMiddleware } from "../../middlewares/async-handler.middleware";
import { getUserById } from "./controllers/get-user-by-id.controller";
import { createUser } from "./controllers/create-user.controller";
import { getUsers } from "./controllers/get-users.controller";
import { requestValidatorMiddleware } from "../../middlewares/request-validator.middleware";
import { createUserValidation } from "./validations/create-user.validation";

const router = Router();

// Define your routes here
router.post(
  "/",
  asyncHandlerMiddleware(requestValidatorMiddleware(createUserValidation)),
  asyncHandlerMiddleware(createUser)
);
router.get("/", asyncHandlerMiddleware(getUsers));
router.get("/:userId", asyncHandlerMiddleware(getUserById));

export default router;
