import express from "express";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import NotFoundException from "./exceptions/NotFoundException";
import HealthCheckRoutes from "./features/healthcheck/routes";
import UserRoutes from "./features/user/routes";
import SwapiRoutes from "./features/swapi/routes";

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/healthcheck", HealthCheckRoutes);
app.use("/users", UserRoutes);
app.use("/swapi", SwapiRoutes);

app.all("*", () => {
  throw new NotFoundException();
});

app.use(errorHandlerMiddleware);

export default app;
