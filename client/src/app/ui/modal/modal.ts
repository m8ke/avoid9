import { Component, signal, Signal } from "@angular/core";

@Component({
    selector: "app-modal",
    imports: [],
    templateUrl: "./modal.html",
    styleUrl: "./modal.scss",
})
export class Modal {
    private _isOpen = signal<boolean>(false);
    protected actionFn!: (() => void) | undefined;

    public get state(): Signal<boolean> {
        return this._isOpen.asReadonly();
    }

    public open(continueFn?: () => void): void {
        this._isOpen.set(true);
        this.actionFn = continueFn;
    }

    public close(): void {
        this._isOpen.set(false);
    }

    public continue(): void {
        this.close();

        if (!!this.actionFn) {
            this.actionFn();
        }
    }
}
