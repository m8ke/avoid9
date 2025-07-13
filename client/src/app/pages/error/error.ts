import { Component } from "@angular/core";
import { Layout } from "@/ui/layout/layout";
import { RouterLink } from "@angular/router";
import { Button } from "@/ui/button/button";

@Component({
    selector: "app-error",
    imports: [
        Layout,
        RouterLink,
        Button,
    ],
    templateUrl: "./error.html",
    styleUrl: "./error.scss",
})
export class Error {
}
