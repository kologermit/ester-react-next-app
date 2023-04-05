import styles from './Advantages.module.css';
import React from 'react';
import CheckIcon from '../Svg/check.svg';
import { TopPageAdvantage } from '../../interfaces/page.interface';

export interface AdvantagesProps {
	advantages: TopPageAdvantage[]
}

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon />
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline} />
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};