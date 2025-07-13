import { Component, ElementRef, signal, Signal, viewChild } from "@angular/core";
import { Layout } from "@/ui/layout/layout";
import { ReactiveFormsModule } from "@angular/forms";
import { Input } from "@/ui/input/input";
import { Timeline } from "@/ui/timeline/timeline";
import { TimelineItem } from "@/ui/timeline-item/timeline-item";
import { Clipboard } from "@angular/cdk/clipboard";
import { ToastService } from "@/ui/toast/toast.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Tab } from "@/ui/tab/tab";
import { TabItem } from "@/ui/tab-item/tab-item";
import { QRCodeComponent } from "angularx-qrcode";
import { InputHelper } from "@/ui/input-helper/input-helper";
import { Modal } from "@/ui/modal/modal";
import { SafeUrl } from "@angular/platform-browser";

@Component({
    selector: "app-result",
    imports: [
        Layout,
        ReactiveFormsModule,
        Input,
        Timeline,
        TimelineItem,
        Tab,
        TabItem,
        QRCodeComponent,
        InputHelper,
        Modal,
    ],
    templateUrl: "./result.html",
    styleUrl: "./result.scss",
})
export class Result {
    public state = signal<any>(null);
    public modalQrCode = viewChild<Modal>("modalQrCodeRef");
    public modalConfirmBurn = viewChild<Modal>("modalConfirmBurnRef");
    public inputRef!: ElementRef<HTMLInputElement> | undefined;

    public constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly clipboard: Clipboard,
        private readonly toastService: ToastService,
    ) {
        this.state.set(this.router.getCurrentNavigation()?.extras.state);
    }

    public onInputRef(ref: Signal<ElementRef<HTMLInputElement> | undefined>): void {
        this.inputRef = ref();
    }

    public selectAndCopyToClipboard(): void {
        if (this.inputRef) {
            this.inputRef.nativeElement.select();
            this.clipboard.copy(this.inputRef.nativeElement.value);
            this.toastService?.show("Link copied to clipboard", "success");
        }
    }

    public get secretLink(): string {
        // TODO: Use env URL
        return "http://localhost:4200" + "/s/something-here";
    }

    public get shareChannel(): string | null {
        return this.route.snapshot.fragment;
    }

    public isShareChannel(channel: string): boolean {
        return this.shareChannel == channel;
    }

    public burnSecret(): void {
        // TODO: Add API request
    }

    public get hasPassphrase(): string {
        return this.state()?.["hasPassphrase"];
    }

    getQrCodeUrl(url: SafeUrl) {
        console.log(url.toString());
    }
}
