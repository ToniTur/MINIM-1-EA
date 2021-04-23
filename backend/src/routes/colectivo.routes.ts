import {Router} from "express";

import colectivoController from "../controllers/colectivo.controller";

const router = Router();

router.get("/", colectivoController.getColectivos);
router.post("/", colectivoController.postColectivos);
router.delete("/:name", colectivoController.deleteColectivo)

export default router;
