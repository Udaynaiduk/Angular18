import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "age",
    pure: true,
})
export class Age implements PipeTransform {
    transform(value: number, ...args: any[]): string {
        if (value < 18) {
            return "Minor";
        } else if (value >= 18 && value < 60) {
            return "Adult";
        } else {
            return "Senior Citizen";
        }
    }
}