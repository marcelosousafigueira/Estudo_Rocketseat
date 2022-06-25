import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCouse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "Marcelo",
        duration: 5,
    });
    return response.send();
}
