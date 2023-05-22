import React, { useEffect, useState } from "react";
import { Box, Text } from "ink";
import { tomatoMeterProps } from "../types/index.js";

export function TomatoMeter({currentTomato = 0, totalTomatoes = 0} : tomatoMeterProps ) {


    const [squashedTomatoes, setSquashedTomatoes] = useState('')
    const [freshTomatoes, setFreshTomatoes] = useState('')

    
    useEffect(() => {
        setSquashedTomatoes('')
        setFreshTomatoes('')

        for (let i = 0; i < currentTomato; i++) 
            setSquashedTomatoes(squashedTomatoes => squashedTomatoes + '❌')
        for (let j = 0; j < totalTomatoes - currentTomato; j++)
            setFreshTomatoes(freshTomatoes => freshTomatoes + '🍅')
            
    }, [currentTomato])





    return (
        <Box>
            <Text color="redBright">TomatoMeter : {squashedTomatoes}{freshTomatoes}</Text>
        </Box>
    )    
}

