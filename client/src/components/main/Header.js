import React, { Component } from 'react';

import { GAME_IDLE } from '../../constants';

import WelcomeMessage from './WelcomeMessage';

class Header extends Component {
	render() {
		const { state, user, plays } = this.props;
		const loginEnabled = !(plays > 0 || (plays === 0 && state !== GAME_IDLE));

		/*return (
			<header className="header">
				<div className="header__column text-right">
					{/!*<WelcomeMessage user={user} loginEnabled={loginEnabled} />*!/}
				</div>
			</header>
		);*/
		const { enabled } = this.props;
		if (enabled) {
			return (
				<a href={process.env.REACT_APP_SERVER_URL + "/auth/google"}>
					<div
						className="google__button"
						aria-label={"Google SignIn Button"}
						tabIndex={"0"}
					/>
				</a>
			);
		}

		return (
			<div
				className="google__button google__button--disabled"
				aria-label={"Google SignIn Button"}
				tabIndex={"0"}
			/>
		);
	}
}

export default Header;
