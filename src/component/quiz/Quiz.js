import React, { useState } from 'react';

const Quiz = () => {
	const [answer, setAnswer] = useState('');
	const [eror, setEror] = useState(null);
	const [status, setStatus] = useState('typing');
	if (status === 'success') {
		return <h1>That's right!🎁</h1>;
	}

	async function handleSumbmit(event) {
		event.preventDefault();
		setStatus('submitting');
		try {
			await submitForm(answer);
			setStatus('success');
		} catch (err) {
			setStatus('typing');
			setEror(err);
		}
	}

	function handleTextareaChange(e) {
		setAnswer(e.target.value);
	}
	return (
		<div>
			<h2>City quiz</h2>
			<p>In which city is there a billboard that turns air into drinkable water?</p>
			<form onSubmit={handleSumbmit}>
				<textarea disabled={status === 'submitting'} value={answer} onChange={handleTextareaChange} />
				<br />
				<button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
				{eror !== null && <p className="Eror">{eror.message}</p>}
			</form>
		</div>
	);
};

export default Quiz;

function submitForm(answer) {
	// Pretend it's hitting the network.
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let shouldError = answer.toLowerCase() !== 'lima';
			if (shouldError) {
				reject(new Error('Good guess but a wrong answer. Try again!'));
			} else {
				resolve();
			}
		}, 1500);
	});
}
