import fs from 'fs';
import chalk from 'chalk';

export function copyFile(source: string, target: string) {
	try {
		fs.copyFileSync(source, target);
		console.log(chalk.blue(`Copied ${source}`));
	} catch (error) {
		console.log(
			chalk.red(`
        Error copying ${source} to ${target}`)
		);
	}
}
export function removeFile(target: string) {
	try {
		fs.unlinkSync(target);
		// console.log(`Removed ${target}`);
		console.log(chalk.yellow(`Removed ${target}`));
	} catch (error) {
		console.log(chalk.red(`Error removing ${target}. Does the file exist?`));
	}
}
export function getGLBFiles(sourceFolder) {
	const files = fs.readdirSync(sourceFolder);
	let glbFiles = files.filter((file) => file.includes('.glb'));
	// console.log(chalk(`Found ${glbFiles.length} glb files`));

	// exclude transformed files
	const transformedFiles = glbFiles.filter((file) => file.includes('transformed'));
	// remove transformed files from glbFiles
	transformedFiles.forEach((file) => {
		const index = glbFiles.indexOf(file);
		// console.log(chalk.green(`Removing ${file} from glbFiles`));

		glbFiles.splice(index, 1);
	});
	return glbFiles;
}
export function getTransformedGLBFiles(sourceFolder) {
	const files = fs.readdirSync(sourceFolder);
	let glbFiles = files.filter((file) => file.includes('.glb'));
	glbFiles = glbFiles.filter((file) => file.includes('-transformed'));
	// console.log(chalk(`Found ${glbFiles.length} transformed glb files`));

	return glbFiles;
}
