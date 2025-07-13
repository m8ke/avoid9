import { Routes } from "@angular/router";
import { Support } from "@/pages/support/support";
import { About } from "@/pages/about/about";
import { Encrypt } from "@/pages/encrypt/encrypt";
import { Secret } from "@/pages/secret/secret";
import { Result } from "@/pages/result/result";
import { Error } from "@/pages/error/error";

export const routes: Routes = [
    {
        path: "",
        component: Encrypt,
    },
    {
        path: "encrypt",
        component: Encrypt,
    },
    {
        path: "s/:id",
        component: Secret,
    },
    {
        path: "r/:id",
        component: Result,
    },
    {
        path: "support",
        component: Support,
    },
    {
        path: "about",
        component: About,
    },
    {
        path: "**",
        component: Error,
    },
];
