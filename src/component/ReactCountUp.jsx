import CountUp, {useCountUp} from 'react-countup'
import {useRef} from "react";

function ReactCountUp() {
	const countUpRef = useRef(null);
	const {
		start,
		pauseResume,
		reset,
		update
	} = useCountUp(
			{
				ref: countUpRef,
				start: 0,
				end: 1000,
				duration: 5,
				delay: 1000
			})


	return (<div>
		<div>
			<div ref={countUpRef}/>
			<button onClick={start}> start</button>
			<button onClick={reset}>reset</button>
			<button onClick={pauseResume}>pause / resume</button>
			<button onClick={() => update(2000)}> update to 2000</button>

		</div>
		<CountUp end={100}/>
		<br/>
		<CountUp end={200}
		         duration={2}/>
		<br/>
		<CountUp
				end={300}
				duration={2}
				start={500}/>
		<br/>
		<CountUp
				end={4000}
				duration={2}
				start={50}
				prefix={'$'}
				decimals={2}/>
		<br/>
		<CountUp
				end={5000}
				duration={2}
				start={50}
				suffix={'USD'}
				decimals={2}/>


	</div>);
}

export default ReactCountUp;