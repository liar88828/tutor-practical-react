import React, {forwardRef} from 'react';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

function ReactTippy() {

	const ColoredToolTip = () => {
		return <span style={{color: "yellow"}}> Colored Component</span>
	}

	const CustomChild = forwardRef((props, ref) => {
		return (
				<div ref={ref}>
					<div>First Line</div>
					<div>Second LIne</div>
				</div>
		)
	})


	return (
			<>
				<div style={{paddingBottom: 20}}>
					<Tippy content={'hahaha'}
					       arrow={false}
					       delay={1000}
					       >
						<button>Hover</button>
					</Tippy>
				</div>

				<div style={{paddingBottom: 20}}>
					<Tippy
							content={<span style={{color: 'red'}}>Colored</span>}
							placement={"right"}>
						<button>Hover</button>
					</Tippy>
				</div>

				<div style={{paddingBottom: 20}}>
					<Tippy
							content={<ColoredToolTip/>}
							placement={"left"}>
						<button>Hover</button>
					</Tippy>
				</div>
				<div style={{paddingBottom: 20}}>
					<Tippy
							content={<ColoredToolTip/>}>
						<CustomChild/>
					</Tippy>
				</div>
			</>

	)
}

export default ReactTippy;