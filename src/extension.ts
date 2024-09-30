import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "functionCollapser" is now active!');

    // Command to collapse functions
    let collapseCommand = vscode.commands.registerCommand('functionCollapser.collapseFunctions', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();
            const foldRanges = getFunctionRanges(text, document);

            // Apply folding (collapsing) to the detected ranges
            foldRanges.forEach(range => {
                vscode.commands.executeCommand('editor.fold', { selectionLines: [range.start.line, range.end.line] });
            });
        }
    });

    // Command to expand (unwrap) all collapsed functions
    let unwrapCommand = vscode.commands.registerCommand('functionCollapser.uncollapseFunctions', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();
            const foldRanges = getFunctionRanges(text, document);

            // Apply unfolding (expanding) to the detected ranges
            foldRanges.forEach(range => {
                vscode.commands.executeCommand('editor.unfold', { selectionLines: [range.start.line, range.end.line] });
            });
        }
    });

    context.subscriptions.push(collapseCommand);
    context.subscriptions.push(unwrapCommand);
}

// Function to get function ranges based on the 📂 comment
function getFunctionRanges(text: string, document: vscode.TextDocument): vscode.Range[] {
    const lines = text.split('\n');
    let ranges: vscode.Range[] = [];
    let collapseNextFunction = false;
    let functionStartLine: number | null = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // If we find the collapse comment with the 📂 emoji, set the flag to collapse/unwrap the next function
        if (line.startsWith('// 📂')) {
            collapseNextFunction = true;
        } else if (collapseNextFunction && (line.startsWith('function') || line.includes('=>'))) {
            // Found the start of a function or arrow function
            functionStartLine = i;
            collapseNextFunction = false;
        }

        // If we're in a function block, detect the end of the function
        if (functionStartLine !== null && line.endsWith('}') && isFunctionEnd(i, document)) {
            ranges.push(new vscode.Range(new vscode.Position(functionStartLine, 0), new vscode.Position(i, line.length)));
            functionStartLine = null;
        }
    }

    return ranges;
}

// Simple helper to ensure we are at the end of a function
function isFunctionEnd(line: number, document: vscode.TextDocument): boolean {
    const textLine = document.lineAt(line).text;
    return textLine.trim().endsWith('}');
}

export function deactivate() {}
