function Contact(){

	return(
		<section id="contact" className="contact">
		<h3>Contact Me</h3>
			<form onSubmit="">
				<div className="info">
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email ID" />
				</div>
				<textarea>Type your Message here...</textarea><br/>
				<input id="button" type="submit" value="Submit"/>
			</form>
		</section>
		)
}


export default Contact