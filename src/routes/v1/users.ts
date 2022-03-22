import { Router } from "express";
import * as MemberCtrl from "../../controllers/v2/users";
import auth from "../../middlewares/auth";
const MemberRouter: Router = Router();

// MemberRouter.post("/", MemberCtrl.createMember);

// MemberRouter.get("/:userId", auth, MemberCtrl.getUser);

// MemberRouter.put("/:userId", auth, MemberCtrl.updateMember);

// MemberRouter.delete("/:userId", auth, MemberCtrl.deleteMember);
MemberRouter.get("/test", auth, MemberCtrl.test);

export const infos = {
  route: "users",
  version: 1,
  router: MemberRouter,
};
