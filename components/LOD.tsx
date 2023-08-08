import { Detailed } from '@react-three/drei';

type Props = {
	models: any[];
	distances: number[];
};
export function LODS(props: Props) {
	const { models, distances } = props;
	return (
		<Detailed distances={distances}>
			{models.map((Model, index) => Model && <Model key={index} />)}
		</Detailed>
	);
}
