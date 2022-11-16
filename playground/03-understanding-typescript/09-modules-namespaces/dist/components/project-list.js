var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Autobind } from "../decorators/autobind.js";
import { Component } from "./base-component.js";
import { ProjectStatus } from "../models/project.js";
import { ProjectItem } from "./project-item.js";
import { projectState } from "../state/project-state.js";
/** ProjectList Class */
export class ProjectList extends Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            const listElement = this.element.querySelector("ul");
            listElement.classList.add("droppable");
        }
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData("text/plain");
        projectState.moveProject(projectId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    dragLeaveHandler(_) {
        const listElement = this.element.querySelector("ul");
        listElement.classList.remove("droppable");
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter((project) => {
                if (this.type === "active") {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " PROJECTS";
    }
    renderProjects() {
        const listElement = document.getElementById(`${this.type}-projects-list`);
        listElement.innerHTML = "";
        for (const projectItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector("ul").id, projectItem);
        }
    }
}
__decorate([
    Autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    Autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    Autobind
], ProjectList.prototype, "dragLeaveHandler", null);
