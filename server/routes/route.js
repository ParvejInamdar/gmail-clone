import express from "express";
import { saveSendEmail } from "../controller/email.controller.js";

const routes = express.Router();

routes.post('/save',saveSendEmail);

export default routes;