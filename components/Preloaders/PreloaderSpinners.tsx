import { Fragment } from 'react';
import styles from './PreloaderSpinners.module.scss';

type Props = {
	theme: string;
};
const Loader = (props: Props) => {
	const { theme } = props;
	const styling = theme === 'dark' ? { filter: 'invert(0)' } : { filter: 'invert(0)' };
	return (
		// <div className="loader_container">
		// 	<div className="loader loader1" style={styling} />
		// 	<div className="loader loader2" style={styling} />
		// 	<div className="loader loader3" style={styling} />
		// 	<div className="loader loader4" style={styling} />
		// 	<div className="loader loader3" style={styling} />
		// </div>
		<div className={styles.loader_container}>
			<div className={`${styles.loader} ${styles.loader1}`} />
			<div className={`${styles.loader} ${styles.loader2}`} />
			<div className={`${styles.loader} ${styles.loader3}`} />
			<div className={`${styles.loader} ${styles.loader4}`} />
			<div className={`${styles.loader} ${styles.loader5}`} />
		</div>
	);
};
export default Loader;
