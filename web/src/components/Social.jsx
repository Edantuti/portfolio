import Card from './Card'
import Github from '../assets/Github.svg'
import Codeforces from '../assets/Codeforces.svg'
import CodeChef from '../assets/CodeChef.svg'
import LinkedIn from '../assets/LinkedIn.svg'

function Social(){
	return(
		<section className="social" id="social">
			<h2>Social Links</h2>
			<div className="cards">
				<Card title="Github" link="https://github.com/Edantuti" image={Github}/>
				<Card title="LinkedIn" link="https://www.linkedin.com/in/edan-tuti-10082b245/" image={LinkedIn}/>
			</div>
			<div className="cards">
				<Card title="CodeChef" link="https://codeforces.com/profile/edantuti" image={CodeChef}/>
				<Card title="Codeforces" link="https://www.codechef.com/users/yolokun" image={Codeforces}/>
			</div>

		</section>
		)
}

export default Social