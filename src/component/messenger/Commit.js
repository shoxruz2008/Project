import React, { useState } from 'react';

const Commit = () => {
	const [showHint, setShowHint] = useState(false);
	const [text, setText] = useState('');
	if (showHint) {
		return (
			<div>
				<p>
					<i>Hint: Your favorite city?</i>
					<FormCommit text={text} onChange={setText} />
					<button onClick={() => setShowHint(false)}>Hide hint</button>
				</p>
			</div>
		);
	}

	return (
		<div>
			<FormCommit text={text} onChange={setText} />
			<button onClick={() => setShowHint(true)}>Hide hint</button>
		</div>
	);
};
function FormCommit({ text, onChange }) {
	return <textarea value={text} onChange={(e) => onChange(e.target.value)}></textarea>;
}

export default Commit;
