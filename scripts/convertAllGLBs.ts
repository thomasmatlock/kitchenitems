/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
import fs from 'fs';
import { copyFile, removeFile, getGLBFiles, getTransformedGLBFiles } from './util';
import chalk from 'chalk';
const { exec } = require('child_process');

const sourceFolder = `./public`;
const sourceGLBFiles = getGLBFiles(sourceFolder);
const transformedGLBFiles = getTransformedGLBFiles(sourceFolder);
const transformedFolder = `./public`;

(async function convertFiles() {
	// remove transformed files
	transformedGLBFiles.forEach((file) => {
		const filePath = `${sourceFolder}/${file}`;
		// removeFile(filePath);
	});
	sourceGLBFiles.forEach((file) => {
		const fileExtension = file.split('.')[1];
		const fileName = `${file.split('.')[0]}`;
		const fileNameWithExtension = `${file.split('.')[0]}.${fileExtension}`;
		const targetFile = `${sourceFolder}/${fileNameWithExtension}`;

		const convertGLBToTypeScriptCommand = `npx gltfjsx ${targetFile} -t`;
		// convert glb to tsx
		exec(convertGLBToTypeScriptCommand, (err: any, stdout: any, stderr: any) => {
			const fileNameCapitalized =
				fileNameWithExtension.charAt(0).toUpperCase() + fileNameWithExtension.slice(1);
			const tsxExtension = '.tsx';
			const newTsxPath = `${fileNameCapitalized.split('.')[0]}${tsxExtension}`;

			const newTsxTargetPath = `components/${fileNameCapitalized.split('.')[0]}.tsx`;

			copyFile(newTsxPath, newTsxTargetPath);
			removeFile(newTsxPath);

			// // glb file
			// const transformedModel = `${fileName}-transformed.glb`;

			// const transformedModelTargetPath = `${transformedFolder}/${transformedModel}`;

			// copyFile(transformedModel, transformedModelTargetPath); // copies source model to public folder
			// removeFile(transformedModel);

			if (err) {
				console.log(chalk.bgRed(`Error converting glb to tsx`));
				return;
			}
		});
	});
})();
