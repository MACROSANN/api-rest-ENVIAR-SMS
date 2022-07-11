import { Router } from "express";
import * as MessageController from '../controllers/messageControllers.js';

const routers = Router();

routers.get('/', (request, response) => {
    response.send('API MACROSANN - Integração do TWilio');
});

routers.post('/message', MessageController.message);

export default routers;