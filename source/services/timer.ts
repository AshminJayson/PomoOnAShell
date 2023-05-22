import { timeFormats } from "../types/index.js";
import { dateTimeConverter } from "../utils/index.js";

let timingCircuit : any = null;
let remainingTimeInMilliSeconds : number = 0;

export function timerRun(minutes: number) {
    
    if (remainingTimeInMilliSeconds == 0) 
        remainingTimeInMilliSeconds = minutes * 60 * 1000;
    
    
    if (!timingCircuit) {
        // console.log("Timing circuit")
        timingCircuit = setInterval(() => {
            remainingTimeInMilliSeconds -= 1000;


        // Reset timer to different cycle
        if (remainingTimeInMilliSeconds == 0) {
            clearInterval(timingCircuit);
        }

        }, 1000)
    }    

    // console.log(remainingTimeInSeconds)
}

export function timerStartStop() {

    if (timingCircuit) {
        clearInterval(timingCircuit);
        timingCircuit = null;
    }
    else
        timerRun(0);

}




export function getRemainingTime() : timeFormats {
    return dateTimeConverter(remainingTimeInMilliSeconds);
}

