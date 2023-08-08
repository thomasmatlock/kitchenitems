import styles from './PreloaderSolarSystem.module.scss';

type Props = {
	theme: string;
};
export default function PreloaderSolarSystem(props: Props) {
	const { theme } = props;

	const styling =
		theme === 'dark' ? { border: '1px solid white' } : { border: '1px solid #1a1a1a' };
	return (
		<div className={styles.spinner_box}>
			<div className={styles.solar_system}>
				<div className={`${styles.earth_orbit} ${styles.orbit}`} style={styling}>
					<div className={`${styles.planet} ${styles.earth}`} style={styling} />
					<div className={`${styles.venus_orbit} ${styles.orbit}`} style={styling}>
						<div className={`${styles.planet} ${styles.venus}`} style={styling} />
						<div className={`${styles.mercury_orbit} ${styles.orbit}`} style={styling}>
							<div className={`${styles.planet} ${styles.mercury}`} style={styling} />
							<div className={styles.sun} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
