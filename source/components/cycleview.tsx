import React, { useEffect, useState } from "react";
import { Box, Text } from "ink";
import Spinner from 'ink-spinner';

import { cycleViewProps } from "../types/index.js";

export function CycleView({ remainingTime = {days:0, hours: 0, minutes: 0, seconds: 0}, currentCycle = '' } : cycleViewProps) {

    const [currentCyclePrint, setCurrentCyclePrint] = useState(currentCycle);

    useEffect(() => {


        if (currentCycle == "Focus")
            setCurrentCyclePrint(currentCycle + ' 🎯')
        else
            setCurrentCyclePrint(currentCycle + ' 🥯')
            
    }, [currentCycle])
    return (
        <Box flexDirection="row">
            <Spinner type="dots"></Spinner>
            <Text color="green"> Remaining Time {remainingTime.minutes}:{remainingTime.seconds} </Text>
            <Text>|</Text> 
            <Text color="blueBright"> Current Cycle : {currentCyclePrint} </Text>
            <Spinner type="dots"></Spinner>
        </Box>
    )
}

