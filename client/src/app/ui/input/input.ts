import {
    AfterViewInit,
    Component,
    ElementRef,
    forwardRef,
    input,
    output,
    signal,
    Signal,
    viewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "app-input",
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: "./input.html",
    styleUrl: "./input.scss",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Input),
            multi: true,
        },
    ],
})
export class Input implements AfterViewInit, ControlValueAccessor {
    public id = input<string | null>(null);
    public type = input<string>("text");
    public name = input.required<string>();
    public defaultValue = input<string | null>(null);
    public value = signal<string | null>(null);
    public readonly = input<boolean>(false);
    public placeholder = input<string | null>(null);
    public autocomplete = input<"on" | "off">("on");
    public inputRef = viewChild<ElementRef<HTMLInputElement>>("inputRef");
    public ref = output<Signal<ElementRef<HTMLInputElement> | undefined>>();

    public ngAfterViewInit(): void {
        this.ref.emit(this.inputRef);

        if (this.defaultValue()) {
            this.value.set(this.defaultValue());
        }
    }

    private onChange = (_: any) => {
    };

    protected onTouched = () => {
    };

    public writeValue(value: string): void {
        this.value.set(value || "");
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public onInput(event: Event): void {
        const value: string = (event.target as HTMLInputElement).value;
        this.value.set(value);
        this.onChange(value);
    }
}
