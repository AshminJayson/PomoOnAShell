#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	
	`
	Usage
	  $ pomoonashell

	Options
		--tomatoes  The no of tomatoes to set for the session
		--sessionDuration The duration of each pomodoro session
		--breakDuration The break between each pomodoro session in minutes

	Examples
	  $ pomoonashell --tomatoes=5 --sessionDuration=25 --breakDuration=5
	  
`,
	{
		importMeta: import.meta,
		flags: {
			tomatoes: {
				type: 'number',
			},
			breakDuration : {
				type: 'number',
			},
			sessionDuration : {
				type: 'number',
			}
		},
	},
);

render(<App tomatoes={cli.flags.tomatoes} breakDuration={cli.flags.breakDuration} sessionDuration={cli.flags.sessionDuration}/>);
