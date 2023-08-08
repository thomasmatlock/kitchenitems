import styles from './PreloaderOrbits.module.scss';

type Props = {
	theme: string;
};
export default function PreloaderOrbits(props: Props) {
	const { theme } = props;

	const styling =
		// theme === 'dark' ? { filter: 'invert(1)' } : { filter: 'invert(0)' };
		theme === 'dark' ? { border: '1px solid white' } : { border: '1px solid #1a1a1a' };
	return (
		<div className={styles.spinner_box}>
			<div className={`${styles.blue_orbit} ${styles.leo}`} style={styling} />
			<div className={`${styles.green_orbit} ${styles.leo}`} style={styling} />
			<div className={`${styles.red_orbit} ${styles.leo}`} style={styling} />
			<div className={`${styles.white_orbit} ${styles.w1} ${styles.leo}`} style={styling} />
			<div className={`${styles.white_orbit} ${styles.w2} ${styles.leo}`} style={styling} />
			<div className={`${styles.white_orbit} ${styles.w3} ${styles.leo}`} style={styling} />
		</div>
	);
}
