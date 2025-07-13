import { Pipe, PipeTransform } from "@angular/core";
import { map, Observable, timer } from "rxjs";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime.js'
dayjs.extend(relativeTime);

@Pipe({
    name: "dateFrom",
})
export class DateFromPipe implements PipeTransform {
    public transform(date: string | number | Date): Observable<string> {
        return timer(0, 1000).pipe(map(() => {
            return dayjs(date).fromNow();
        }));
    }
}
