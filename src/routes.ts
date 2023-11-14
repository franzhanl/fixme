import { Router } from "express";

import DetailHoleController from "./controllers/hole/DetailHoleController";
import CreateHoleController from "./controllers/hole/CreateHoleController";
import ListHolesController from "./controllers/hole/ListHolesController";
import DeleteHoleController from "./controllers/hole/DeleteHoleController";
import UpdateHoleController from "./controllers/hole/UpdateHoleController";

const router = Router()

router.get('/hole/:id', new DetailHoleController().handle )

router.get('/holes', new ListHolesController().handle)

router.post('/newhole', new CreateHoleController().handle)

router.delete('/deletehole/:id', new DeleteHoleController().handle)

router.put('/updatehole', new UpdateHoleController().handle)

export { router }