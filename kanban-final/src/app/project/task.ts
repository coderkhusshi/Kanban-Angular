import { Optional } from "@angular/core";

export class Task{
    taskid!: Number;
    description!:string;
    status!:Optional;
    title!:string;
    kanbanid! : Number;
}