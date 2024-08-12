import express from "express";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import NotFoundException from "./exceptions/NotFoundException";
import HealthCheckRoutes from "./features/healthcheck/routes";

const app = express();

app.use(express.json());

app.use("/healthcheck", HealthCheckRoutes);

app.all(("*"), () => {
  throw new NotFoundException;
});

app.use(errorHandlerMiddleware);

export default app;
