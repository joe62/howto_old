import React from 'react';
import {H1,H2,H3,H4} from './typography'
import {default as Button } from './button'
const App = () =>
	<div>
		<H1>Heading 1</H1>
		<H2>Heading 2</H2>
		<H3>Heading 3</H3>
		<H4>Heading 4</H4>
		<Button type="submit">Hello World</Button>
	</div>

export default App