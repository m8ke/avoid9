import { Component, inject, input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { Subscription } from "rxjs";

@Component({
    selector: "app-tab-item",
    imports: [
        RouterLink,
        NgClass,
    ],
    templateUrl: "./tab-item.html",
    styleUrl: "./tab-item.scss",
})
export class TabItem implements OnInit, OnDestroy {
    public fragment = input.required<string>();
    public routerLink = input<string | string[]>([]);
    public route = inject(ActivatedRoute);
    public isActive = false;
    private route$!: Subscription;

    public ngOnInit(): void {
        this.route$ = this.route.fragment.subscribe((frag): void => {
            this.isActive = frag === this.fragment();
        });
    }

    public ngOnDestroy(): void {
        this.route$.unsubscribe();
    }
}
