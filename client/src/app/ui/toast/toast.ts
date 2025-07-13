import { Component } from "@angular/core";
import { IToast, ToastService } from "@/ui/toast/toast.service";
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";

@Component({
    selector: "app-toast",
    templateUrl: "./toast.html",
    styleUrl: "./toast.scss",
    imports: [
        AsyncPipe,
    ],
})
export class Toast {
    public constructor(
        private readonly toastService: ToastService,
    ) {
    }

    protected get toasts$(): Observable<IToast[]> {
        return this.toastService.toasts$.asObservable();
    }
}
