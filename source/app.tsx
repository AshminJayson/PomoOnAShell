import React, {useState, useEffect} from 'react';
import {Box, Newline, Text, useInput} from 'ink';

import {pomoSettings} from './types/index.js';
import {
	timerRun,
	timerStartStop,
	getRemainingTime,
	cycleController,
} from './services/index.js';
import {CycleView, TomatoMeter} from './components/index.js';
import {timeFormats} from './types/index.js';

export default function App({
	tomatoes = 4,
	breakDuration = 5,
	sessionDuration = 25,
}: pomoSettings) {

	const [remainingTime, setRemainingTime] = useState<timeFormats>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [currentCycle, setCurrentCycle] = useState('Focus');
	const [tomatoCount, setTomatoCount] = useState(0);
	const [success, setSuccess] = useState(false);

	useInput((input, _) => {
		if (input === 'P' || input === 'p') {
			timerStartStop();
		}
	});

	function poller() {
		setInterval(() => {
			setRemainingTime(getRemainingTime());
			cycleController(
				getRemainingTime(),
				setCurrentCycle,
				setTomatoCount,
				setSuccess,
				breakDuration,
				sessionDuration,
				tomatoes
			);
		}, 1000);
	}

	useEffect(() => {
		poller();
		timerRun(sessionDuration);
	}, []);

	return (
		<Box flexDirection="column" alignItems="center" borderStyle="round" margin={3} borderColor="grey">

			<TomatoMeter
				currentTomato={tomatoCount}
				totalTomatoes={tomatoes}
			></TomatoMeter>
			<Newline></Newline>
			

			<Text italic={true}>
				Session Target 🎯 =&gt; <Text color="red">{tomatoes} 🍅</Text> |  Session/Break
				Duration =&gt; <Text color="blue">{sessionDuration}</Text>/<Text color="yellow">{breakDuration}</Text> minutes{' '}
			</Text>
			<Text>Press P to ⏯️ pause/resume current session</Text>

			
			<Newline></Newline>

			<CycleView
				remainingTime={remainingTime}
				currentCycle={currentCycle}
				></CycleView>

			{success && 
				<Box flexDirection='column' borderTop={true} alignItems='center'>
					<Newline></Newline>
					<Text color="red" backgroundColor="white">🍅 Congrats. You are now a tomatologist 🍅</Text>
					<Text color="cyanBright"> Press CTRL + C (x2) to Exit</Text>
				</Box>
			}
			
		</Box>
	);
}
