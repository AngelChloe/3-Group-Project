//Post-route//

import { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../controllers/pasttrips-controller";

const postRouter = Router();

postRouter.get("/", getAllPasttrips);
postRouter.get("/:id", getPasttripsById);
postRouter.post("/", addPasttrips);
postRouter.put("/:id", updatePasttrips);
postRouter.delete("/:id", deletePasttrips);

export default postRouter;