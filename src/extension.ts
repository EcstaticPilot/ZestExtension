// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "zestcode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	const build = vscode.commands.registerCommand('zestcode.build', () => {
		vscode.window.showInformationMessage('Building the project...');
	}
	);
	const run = vscode.commands.registerCommand('zestcode.run', () => {
		vscode.window.showInformationMessage('Running the project...');
	}
	);
	const upload = vscode.commands.registerCommand('zestcode.upload', () => {
		vscode.window.showInformationMessage('uploading the project...');
	}
	);
	const newproject = vscode.commands.registerCommand('zestcode.newproject', () => {
		vscode.window.showInformationMessage('creating new project...');
	}
	);	
	const openterminal = vscode.commands.registerCommand('zestcode.openterminal', () => {
		vscode.window.showInformationMessage('opening terminal...');
		
	    // Get all terminals with the name "ZestCode Terminal"
		const existingTerminals = vscode.window.terminals.filter(term => 
			term.name === 'ZestCode Terminal');
			
				if (existingTerminals.length > 0) {
					// If there is an existing terminal, show it instead of creating a new one
					existingTerminals[0].show();
				} else {
					// If no terminal exists, create a new one
					const zestTerminal = vscode.window.createTerminal("ZestCode Terminal");
					zestTerminal.show();
				}
	}
	);
	context.subscriptions.push(build,run,upload,newproject, openterminal);
}

// This method is called when your extension is deactivated
export function deactivate() {}
