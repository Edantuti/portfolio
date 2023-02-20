import Card from './Card'

function Technical(){
	return(
		<section id="technical" className="skills">
			<h3>Technical Skills</h3>
			<div className="cards">
				<Card title="Java" level="45"/>
				<Card title="Python" level="60"/>
				<Card title="Javascript" level="30"/>
			</div>
			<div className="cards">
				<Card title="Web Dev" level="30"/>
			</div>
		</section>
		)
}

export default Technical