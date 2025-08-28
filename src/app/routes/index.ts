import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { RentRoutes } from "../modules/Rent/rent.route";

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/rents",
    route: RentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
