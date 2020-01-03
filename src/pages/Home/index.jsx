import React from 'react';
import Date from '@components/Date/Date';
import Count from '@components/Count/Count';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	addCount() {
		const { count } = this.state;
		this.setState({
			count: count + 1,
		});
	}

	render() {
		const { count } = this.state;
		const s = {
			a: 1,
			b: 2,
		};
		console.log(s);
		return (
			<div>
				<Date />
				<Count addCount={() => this.addCount()} count={count} />
			</div>
		);
	}
}
export default Home;
