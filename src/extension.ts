// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // This line registers your command within VS Code.
	let disposable = vscode.commands.registerCommand('cpp-code-runner-button.runCppCode', () => {
		vscode.commands.executeCommand('code-runner.run');
	});
	
    // The disposable will ensure that the command is cleaned up properly when the extension is deactivated.
    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
