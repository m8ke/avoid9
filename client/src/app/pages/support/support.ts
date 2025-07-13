import { Component } from "@angular/core";
import { Layout } from "@/ui/layout/layout";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-support",
    imports: [
        Layout,
        NgClass,
    ],
    templateUrl: "./support.html",
    styleUrl: "./support.scss",
})
export class Support {
    public roadmap = [
        {
            cycle: "Cycle II",
            dueAt: "2025 Q4",
            title: "API",
            content: "Simple REST API would be nice",
            tasks: [
                {
                    isComplete: false,
                    content: "REST API: create, read, delete a secret",
                },
                {
                    isComplete: false,
                    content: "Simple web-based documentation",
                },
            ],
        },
        {
            cycle: "Cycle I",
            dueAt: "2025 Q3",
            title: "Basic functionality and UX",
            content: "Functionality that didn't fit into the MVP",
            tasks: [
                {
                    isComplete: false,
                    content: "Docker image on Docker Hub",
                },
                {
                    isComplete: false,
                    content: "UI/UX improvements according to feedback and analysis",
                },
                {
                    isComplete: false,
                    content: "Multiple languages: English, Estonian",
                },
                {
                    isComplete: false,
                    content: "Dark and light theme",
                },
            ],
        },
    ]
}
