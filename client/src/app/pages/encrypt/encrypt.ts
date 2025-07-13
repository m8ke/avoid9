import { Component } from "@angular/core";
import { Layout } from "@/ui/layout/layout";
import { Dropdown } from "@/ui/dropdown/dropdown";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DropdownItem } from "@/ui/dropdown-item/dropdown-item";
import { Icon } from "@/ui/icon/icon";
import { Button } from "@/ui/button/button";
import { Input } from "@/ui/input/input";
import { Clipboard } from "@angular/cdk/clipboard";
import { ToastService } from "@/ui/toast/toast.service";
import { Router } from "@angular/router";
import { InputHelper } from "@/ui/input-helper/input-helper";

@Component({
    selector: "app-encrypt",
    imports: [
        Layout,
        Dropdown,
        ReactiveFormsModule,
        DropdownItem,
        Icon,
        Button,
        Input,
        InputHelper,
    ],
    templateUrl: "./encrypt.html",
    styleUrl: "./encrypt.scss",
})
export class Encrypt {
    public encryptForm!: FormGroup;

    public constructor(
        private readonly router: Router,
        private readonly clipboard: Clipboard,
        private readonly formBuilder: FormBuilder,
        private readonly toastService: ToastService,
    ) {
        this.encryptForm = this.formBuilder.group({
            content: [null, [
                Validators.required,
                Validators.maxLength(5000),
            ]],
            expireAt: [null, [
                Validators.required,
                Validators.min(1),
                Validators.maxLength(60 * 24 * 365), // A year
            ]],
            passphrase: [null, [
                Validators.minLength(6),
                Validators.maxLength(255),
            ]],
        })
    }

    public get contentLength(): number {
        return +this.encryptForm.get("content")?.value?.length || 0;
    }

    public async submitEncrypt(): Promise<void> {
        if (this.encryptForm.valid) {
            // TODO: API request
            await this.router.navigate(["/r/unique-id-here"], {
                fragment: "secret",
                state: {
                    hasPassphrase: !!this.encryptForm.get("passphrase")?.value,
                },
            });
        } else {
            this.toastService.show("Please enter your secret", "error");
        }
    }

    public generatePassphrase(): void {
        const passphrase: string = this.generateRandomString(12);
        this.encryptForm.patchValue({passphrase: passphrase})
        // this.clipboard.copy(passphrase);
        this.toastService.show("Copy and store generated passphrase securely");
    }

    public generateRandomString(length: number): string {
        const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        return [...Array(length)].map(_ => c[~~(Math.random() * c.length)]).join("");
    }
}
