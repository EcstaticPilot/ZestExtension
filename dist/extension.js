"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var path = __toESM(require("path"));
function activate(context) {
  console.log('Congratulations, your extension "zestcode" is now active!');
  const build = vscode.commands.registerCommand(
    "zestcode.build",
    () => {
      vscode.window.showInformationMessage("Building the project...");
    }
  );
  const run = vscode.commands.registerCommand(
    "zestcode.run",
    () => {
      vscode.window.showInformationMessage("Running the project...");
    }
  );
  const upload = vscode.commands.registerCommand(
    "zestcode.upload",
    () => {
      vscode.window.showInformationMessage("uploading the project...");
    }
  );
  const newproject = vscode.commands.registerCommand(
    "zestcode.newproject",
    () => {
      vscode.window.showInformationMessage("creating new project...");
    }
  );
  const openterminal = vscode.commands.registerCommand(
    "zestcode.openterminal",
    () => {
      vscode.window.showInformationMessage("opening terminal...");
      const existingTerminals = vscode.window.terminals.filter((term) => term.name === "ZestCode Terminal");
      if (existingTerminals.length > 0) {
        existingTerminals[0].show();
      } else {
        const zestTerminal = vscode.window.createTerminal({
          name: "ZestCode Terminal",
          iconPath: vscode.Uri.file(path.join(context.extensionPath, "src", "icon.png"))
        });
        zestTerminal.show();
      }
    }
  );
  context.subscriptions.push(build, run, upload, newproject, openterminal);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
