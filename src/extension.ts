import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.sectionComment', () => {
		if (typeof vscode.window.activeTextEditor !== 'undefined') {
			showDialogBox(vscode.window.activeTextEditor);
		} else {
			vscode.window.showInformationMessage("SECTION COMMENT: No active text editors found");
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

function showDialogBox(editor:vscode.TextEditor){
	var box = vscode.window.createInputBox();
	box.title = "Section title";
	box.show();
	box.onDidAccept((event) => {
		writeComment(editor, box.value);
		box.hide();			
	})
}

function writeComment(editor:vscode.TextEditor, message:string){
	var msg:Array<string> = message.toLowerCase().split("");
	editor.edit((builder) => {
		builder.insert(editor.selections[0].start, "/* \r\n");
		for(var i = 0;i<7;i++){
			var str = "";
			msg.forEach(char => {
				if(letters[char]){
					console.log(char);
					str += letters[char][i];
				}
			});
			str += "\r\n";
			builder.insert(editor.selections[0].start, str);
		}
		builder.insert(editor.selections[0].start, "*/ \r\n");
	})
}

interface AlphabetLetter {
	[index:string]:Array<string>;
}

var letters = {} as AlphabetLetter;
letters["a"] = [
	"   ###     ",
	"  ## ##    ",
	" ##   ##   ",
	"##     ##  ",
	"#########  ",
	"##     ##  ",
	"##     ##  "
];


letters["b"] = [
	"########   ",
	"##     ##  ",
	"##     ##  ",
	"########   ",
	"##     ##  ",
	"##     ##  ",
	"########   "
];

letters["c"] = [
	" ######    ",
	"##    ##   ",
	"##         ",
	"##         ",
	"##         ",
	"##    ##   ",
	" ######    "
];

letters["d"] = [
	"########   ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"########   "
];

letters["e"] = [
	"########   ",
	"##         ",
	"##         ",
	"######     ",
	"##         ",
	"##         ",
	"########   "
];

letters["f"] = [
	"########   ",
	"##         ",
	"##         ",
	"######     ",
	"##         ",
	"##         ",
	"##         "
];

letters["g"] = [
	" ######    ",
	"##    ##   ",
	"##         ",
	"##   ####  ",
	"##    ##   ",
	"##    ##   ",
	" ######    "
];

letters["h"] = [
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"#########  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  "
];

letters["i"] = [
	"####  ",
	" ##   ",
	" ##   ",
	" ##   ",
	" ##   ",
	" ##   ",
	"####  "
];

letters["j"] = [
	"      ##   ",
	"      ##   ",
	"      ##   ",
	"      ##   ",
	"##    ##   ",
	"##    ##   ",
	" ######    "
];

letters["k"] = [
	"##    ##   ",
	"##   ##    ",
	"##  ##     ",
	"#####      ",
	"##  ##     ",
	"##   ##    ",
	"##    ##   "
];

letters["l"] = [
	"##         ",
	"##         ",
	"##         ",
	"##         ",
	"##         ",
	"##         ",
	"########   "
];

letters["m"] = [
	"##     ##  ",
	"###   ###  ",
	"#### ####  ",
	"## ### ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  "
];

letters["n"] = [
	"##    ##   ",
	"###   ##   ",
	"####  ##   ",
	"## ## ##   ",
	"##  ####   ",
	"##   ###   ",
	"##    ##   "
];

letters["o"] = [
	" #######   ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	" #######   "
];

letters["p"] = [
	"########   ",
	"##     ##  ",
	"##     ##  ",
	"########   ",
	"##         ",
	"##         ",
	"##         "
];

letters["q"] = [
	" #######   ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##  ## ##  ",
	"##    ##   ",
	" ##### ##  "
];

letters["r"] = [
	"########   ",
	"##     ##  ",
	"##     ##  ",
	"########   ",
	"##   ##    ",
	"##    ##   ",
	"##     ##  "
];

letters["s"] = [
	" ######    ",
	"##    ##   ",
	"##         ",
	" ######    ",
	"      ##   ",
	"##    ##   ",
	" ######    "
];

letters["t"] = [
	"########   ",
	"   ##      ",
	"   ##      ",
	"   ##      ",
	"   ##      ",
	"   ##      ",
	"   ##      "
];

letters["u"] = [
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	" #######   "
];

letters["v"] = [
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	" ##   ##   ",
	"  ## ##    ",
	"   ###     "
];

letters["w"] = [
	"##      ## ",
	"##  ##  ## ",
	"##  ##  ## ",
	"##  ##  ## ",
	"##  ##  ## ",
	"##  ##  ## ",
	" ###  ###  "
];

letters["x"] = [
	"##     ##  ",
	" ##   ##   ",
	"  ## ##    ",
	"   ###     ",
	"  ## ##    ",
	" ##   ##   ",
	"##     ##  "
];

letters["y"] = [
	"##    ##   ",
	" ##  ##    ",
	"  ####     ",
	"   ##      ",
	"   ##      ",
	"   ##      ",
	"   ##      "
];

letters["z"] = [
	"########   ",
	"     ##    ",
	"    ##     ",
	"   ##      ",
	"  ##       ",
	" ##        ",
	"########   "
];

letters["0"] = [
	"  #####    ",
	" ##   ##   ",
	"##     ##  ",
	"##     ##  ",
	"##     ##  ",
	" ##   ##   ",
	"  #####    "
];

letters["1"] = [
	"   ##      ",
	" ####      ",
	"   ##      ",
	"   ##      ",
	"   ##      ",
	"   ##      ",
	" ######    "
];

letters["2"] = [
	" #######   ",
	"##     ##  ",
	"       ##  ",
	" #######   ",
	"##         ",
	"##         ",
	"#########  "
];

letters["3"] = [
	" #######   ",
	"##     ##  ",
	"       ##  ",
	" #######   ",
	"       ##  ",
	"##     ##  ",
	" #######   "
];

letters["4"] = [
	"##         ",
	"##    ##   ",
	"##    ##   ",
	"##    ##   ",
	"#########  ",
	"      ##   ",
	"      ##   "
];

letters["5"] = [
	"########   ",
	"##         ",
	"##         ",
	"#######    ",
	"      ##   ",
	"##    ##   ",
	" ######    "
];

letters["6"] = [
	" #######   ",
	"##     ##  ",
	"##         ",
	"########   ",
	"##     ##  ",
	"##     ##  ",
	" #######   "
];

letters["7"] = [
	"########   ",
	"##    ##   ",
	"    ##     ",
	"   ##      ",
	"  ##       ",
	"  ##       ",
	"  ##       "
];

letters["8"] = [
	" #######   ",
	"##     ##  ",
	"##     ##  ",
	" #######   ",
	"##     ##  ",
	"##     ##  ",
	" #######   "
];

letters["9"] = [
	" #######   ",
	"##     ##  ",
	"##     ##  ",
	" ########  ",
	"       ##  ",
	"##     ##  ",
	" #######   "
];

letters["-"] = [
	"           ",
	"           ",
	"           ",
	"#######    ",
	"           ",
	"           ",
	"           "
];

letters[" "] = [
	"     ",
	"     ",
	"     ",
	"     ",
	"     ",
	"     ",
	"     ",
];
	