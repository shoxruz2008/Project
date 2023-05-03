import { useContext } from 'react';
import { LevelContext } from './LevelContext';

const Section = ({ children, isFancy }) => {
	const level = useContext(LevelContext);
	return (
		<section className={'section ' + (isFancy ? 'fancy' : '')}>
			<LevelContext.Provider value={level}></LevelContext.Provider>
			{children}
		</section>
	);
};

export default Section;
