import { Component, input } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { DateFromPipe } from "@/pipes/date-from/date-from-pipe";

@Component({
    selector: "app-timeline-item",
    imports: [
        DateFromPipe,
        AsyncPipe,
    ],
    templateUrl: "./timeline-item.html",
    styleUrl: "./timeline-item.scss",
})
export class TimelineItem {
    public datetime = input.required<string | number>();
}
