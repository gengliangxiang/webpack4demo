import React from 'react';
import style from './style.scss';

class Count extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		const { addCount, count } = this.props;
		return (
			<div className={style.box}>
				<span onClick={addCount} className={style.btn}>ADD</span>
				<span>{count}</span>
			</div>
		);
	}
}
export default Count;
