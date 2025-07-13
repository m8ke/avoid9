import { Component } from "@angular/core";
import { Layout } from "@/ui/layout/layout";
import { Button } from "@/ui/button/button";
import { ReactiveFormsModule } from "@angular/forms";
import { Clipboard } from "@angular/cdk/clipboard";
import { ToastService } from "@/ui/toast/toast.service";
import { Input } from "@/ui/input/input";

@Component({
    selector: "app-secret",
    imports: [
        Layout,
        Button,
        ReactiveFormsModule,
        Input,
    ],
    templateUrl: "./secret.html",
    styleUrl: "./secret.scss",
})
export class Secret {
    protected secret: any = null;

    public constructor(
        private readonly clipboard: Clipboard,
        private readonly toastService: ToastService,
    ) {
    }

    public revealSecret(): void {
        this.secret = {
            content: "test todo"
        };
    }

    public selectAndCopyToClipboard(): void {
        if (this.secret.content) {
            this.clipboard.copy(this.secret.content);
            this.toastService?.show("Copied to clipboard", "success");
        }
    }
}
