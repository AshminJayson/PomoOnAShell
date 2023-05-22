import { timeFormats } from "../types/index.js";

export function dateTimeConverter(timeInSeconds : number) : timeFormats {

    // console.log(timeInSeconds);
    var days = Math.floor(timeInSeconds / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeInSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeInSeconds % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeInSeconds % (1000 * 60)) / 1000);

    return { days: days, hours: hours, minutes: minutes, seconds: seconds }

}