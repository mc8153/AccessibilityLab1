import React, { Component } from 'react';
import './Results.scss';

class Results extends Component {
	handleClick() {
		this.props.resetGameHandler();
	}

	render() {
		const { correctAnswers, incorrectAnswers, score, roundNumber } = this.props;

		return (
			<div className="results">
				<div className="results__title">Game over.</div>

				<div className="results__content">
					<p className="results__sentence">Better luck next time! Here's your statistics:</p>

					<div className="result">
						<span className="result__category">Final Score:</span>
						<span className="result__value">{score}</span>
					</div>

					<div className="result">
						<span className="result__category">Correct Answers:</span>
						<span className="result__value">{correctAnswers}</span>
					</div>

					<div className="result">
						<span className="result__category">Incorrect Answers:</span>
						<span className="result__value">{incorrectAnswers}</span>
					</div>

					<div className="result">
						<span className="result__category">Rounds:</span>
						<span className="result__value">{roundNumber}</span>
					</div>
				</div>

				<button className="button" onClick={this.handleClick.bind(this)}>Continue</button>
			</div>
		);
	}
}

export default Results;