import React from 'react';
import classnames from 'classnames';
// import logo from '@images/logo.png';
// import logo2 from '@images/logo2.png';
import reactLogo from '@images/react.png';
// import BangkLogo from '@images/logo_hangzhou.png';
import style from './style.scss';

// const reactLogoStyle = {
// 	backgroundImage: `url(${reactLogo})`,
// };

class DateComponent extends React.Component {
	constructor(props) {
		super(props);
		// console.log(logo);
		this.state = {
			date: new Date(),
			arr: [1, 2, 3, 45, 4],
		};
	}

	componentDidMount() {
		const {arr} = this.state;
		console.log(...arr);
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		const { date, arr } = this.state;
		const arrStr = [...arr];
		const str = arrStr.join();
		const colorClass = classnames();
		return (
			<div>
				<div className={style.title}>时间</div>
				<div className={style.logo_box}>
					{/* <img className={style.logo} src={logo} alt="" />
					<img className={style.logo} src={logo2} alt="" /> */}
					<img className={style.logo} src={reactLogo} alt="" />
					{/* <img className={style.logo} src={BangkLogo} alt="" /> */}
				</div>
				<div className={style.react} />
				<div>{str}</div>
				<div className={style.title}>
					{date.toLocaleTimeString()}
				</div>
				<div className={colorClass}>
					123
				</div>
			</div>
		);
	}
}
export default DateComponent;
