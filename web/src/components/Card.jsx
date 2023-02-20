
import {useState} from 'react'
import Circle from './Circle'

function Card({title, link, level, image}){
	return(
		<article className="card">
			<h3>{title}</h3>
			{link && <img src={image} alt={title}/>}
			{link && <a href={link}> Click Here</a>}
			{level && <Circle percent={level}/>}
		</article>

		)
}

export default Card