import { Router } from "express";
import { asyncHandlerMiddleware } from "../../middlewares/async-handler.middleware";
import { getById } from "./controllers/get-by-id.controller";
import { create } from "./controllers/create.controller";
import { index } from "./controllers/index.controller";
import { requestValidatorMiddleware } from "../../middlewares/request-validator.middleware";
import { createUserValidation } from "./validations/create-user.validation";

const router = Router();

// Define your routes here
router.post(
  "/",
  asyncHandlerMiddleware(requestValidatorMiddleware(createUserValidation)),
  asyncHandlerMiddleware(create)
);
router.get("/", asyncHandlerMiddleware(index));
router.get("/:userId", asyncHandlerMiddleware(getById));

export default router;
