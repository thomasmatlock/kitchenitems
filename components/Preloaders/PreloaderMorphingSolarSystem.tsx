import styles from './PreloaderMorphingSolarSystem.module.scss';

type Props = {
	theme: string;
};
export default function PreloaderMorphingSolarSystem(props) {
	// const { theme } = props;

	// const styling = theme === 'dark' ? { filter: 'invert(0)' } : { filter: 'invert(0)' };
	// theme === 'dark' ? { border: '1px solid white' } : { border: '1px solid #1a1a1a' };
	return (
		<div className={styles.game_loader}>
			<div className={styles.game_loader__planet}>
				<div className={styles.loader_radius1} />
				<div className={styles.loader_radius2} />
				<div className={styles.loader_radius3} />
				<div className={styles.loader_radius4} />
				<div className={styles.loader_mini1}></div>
				<div className={styles.loader_mini2}></div>
				<div className={styles.loader_mini3}></div>
				<div className={styles.loader_mini4}></div>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="goo">
							<feGaussianBlur
								in="SourceGraphic"
								stdDeviation="15"
								result="blur"
							></feGaussianBlur>
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -7"
								result="goo"
							></feColorMatrix>
							{/* <feBlend in="SourceGraphic" in2="goo"></feBlend> */}
							<feBlend in="SourceGraphic" in2="goo"></feBlend>
						</filter>
					</defs>
				</svg>
			</div>
		</div>
	);
}
