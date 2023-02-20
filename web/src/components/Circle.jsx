import {useState} from "react"

import './css/Circle.css'
function Circle({percent}){
	const [array, setArray]=useState(2*Math.PI*57)
	const [offset, setOffset]=useState(array*((100-percent)/100))
	return(
		<svg className="progress">
			<circle className="track"/>
			<circle className="indicator" strokeDasharray={array} strokeDashoffset={offset}/>
			<text className="percent"x="60" y="80">{percent}%</text>
		</svg>

		)
}

export default Circle