import { timeFormats } from "../types/index.js";
import { timerRun, timerStartStop } from "./index.js";


let currentCycle : string = "Focus";
let tomatoCount : number = 0;


export function cycleController(remainingTime : timeFormats, setCurrentCycle : Function, setTomatoCount : Function, setSuccess : Function, breakDuration : number, sessionDuration : number, totalTomatoes : number ) {

    // console.log('shift', remainingTime)
    if (remainingTime.seconds != 0 || remainingTime.minutes != 0)
        return
     
    timerStartStop();
    if (currentCycle == 'Focus') {
        currentCycle = "Break";
        tomatoCount += 1

        setTomatoCount(tomatoCount)
        setCurrentCycle(currentCycle)

        timerRun(breakDuration)

        if (tomatoCount == totalTomatoes) {
            setSuccess(true)
            timerStartStop();
        }

    }
    else if(currentCycle == "Break") {

        currentCycle = "Focus";
        setCurrentCycle(currentCycle)

        timerRun(sessionDuration)
    }
    
}