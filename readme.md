{
// Workbench
"workbench.startupEditor": "newUntitledFile",
"workbench.editor.labelFormat": "short",
"workbench.iconTheme": "material-icon-theme",
"workbench.editor.enablePreview": false,
"workbench.colorTheme": "OM Theme (Default Dracula Italic)",
"workbench.sideBar.location": "left",
"workbench.list.smoothScrolling": true,
"workbench.editorAssociations": {
"\*.ipynb": "jupyter.notebook.ipynb"
},
"editor.fontFamily": "Fira Code",
//
"explorer.confirmDragAndDrop": false,
"cssModules.camelCase": true,
"editor.semanticHighlighting.enabled": false,
"[prisma]": {
"editor.formatOnSave": true
},
"editor.parameterHints.enabled": false,
"editor.mouseWheelZoom": true, // Habilita poder dar zoom com Ctrl + Scroll do mouse
"editor.renderWhitespace": "boundary", // Mostra 'pontinhos' no inicio da linha indicando espaços
"workbench.editor.highlightModifiedTabs": true, // Habilita mostrar quais abas foram editadas e não salvas ainda
"path-intellisense.extensionOnImport": true,
"material-icon-theme.activeIconPack": "nest",
"files.autoSaveDelay": 2000, // Delay do autosave
"files.eol": "\n",
"files.autoSave": "afterDelay",
"editor.quickSuggestionsDelay": 1,
"editor.suggest.preview": true,

//
"cssvar.files": ["src/styles/theme.css"],
"cssvar.extensions": ["css", "scss", "sass", "less", "ts", "tsx"],
"material-icon-theme.folders.associations": {
"infra": "app",
"entities": "class",
"domain": "class",
"schemas": "class",
"typeorm": "database",
"repositories": "mappings",
"http": "container",
"migrations": "tools",
"modules": "components",
"implementations": "core",
"dtos": "typescript",
"fakes": "mock",
"websockets": "pipe",
"protos": "pipe",
"grpc": "pipe",
"providers": "include",
"subscribers": "messages",
"useCases": "controller",
"kafka": "scripts",
"mappers": "meta",
"\_shared": "shared",
"eslint-config": "tools",
"kube": "kubernetes",
".sequelizerc": "javascript",
".stylelintrc": "json",
".prettierrc": "json",
"_.tsx": "typescriptreact",
".env._": "dotenv"
},

"bracket-pair-colorizer-2.activeScopeCSS": [
"borderStyle : solid",
"borderWidth : 1px",
"borderColor : {color}",
"opacity: 0.5"
],
"material-icon-theme.files.associations": {
"ormconfig.json": "database",
"tsconfig.json": "tune",
"_.proto": "3d",
"_.webpack.js": "webpack"
},

"material-icon-theme.languages.associations": {
"dotenv": "tune"
},
"explorer.confirmDelete": false,

// Editor and breadcrumbs
"breadcrumbs.enabled": true,
"editor.renderControlCharacters": false,
"editor.tabSize": 2,
"editor.renderLineHighlight": "gutter",
"editor.rulers": [79, 120],
"editor.minimap.enabled": false,
"editor.fontSize": 14,
"editor.detectIndentation": true,
"editor.wordBasedSuggestions": false,
"editor.suggest.localityBonus": true,
"editor.acceptSuggestionOnCommitCharacter": false,
"editor.formatOnPaste": true,
"editor.cursorSmoothCaretAnimation": true,
"editor.mouseWheelScrollSensitivity": 2,
"editor.smoothScrolling": true,
"editor.linkedEditing": true,
"editor.glyphMargin": false,
"editor.fontLigatures": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[html]": {
"editor.defaultFormatter": "vscode.html-language-features"
},
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.fixAll": true
},
"editor.suggestSelection": "first",

// Git
"git.enableSmartCommit": true,
"diffEditor.ignoreTrimWhitespace": true,

// Debug
"debug.console.fontSize": 12,

// Files and search
"files.defaultLanguage": "{activeEditorLanguage}",
"files.exclude": {
"USE_GITIGNORE": true
},
"search.exclude": {
"**/node_modules": true,
"**/bower_components": true,
"**/coverage": true,
"**/dist": true,
"**/build": true,
"**/.build": true,
"\*\*/.gh-pages": true,
"node_modules/": true
},

// Terminal
"terminal.integrated.copyOnSelection": false,
"terminal.integrated.cursorBlinking": true,
"terminal.integrated.cursorStyle": "line",
"terminal.external.linuxExec": "x-terminal-emulator",
"terminal.integrated.fontFamily": "'Operator Mono Lig Book', 'Fira Code', 'SF Mono', Consolas, 'Source Code Pro', 'Dank Mono', Menlo, 'Inconsolata', 'Droid Sans Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', 'Courier New', Courier, Monaco, monospace",
"terminal.integrated.fontSize": 14,
"terminal.integrated.drawBoldTextInBrightColors": false,
"terminal.integrated.enableFileLinks": false,
"terminal.integrated.env.linux": {
// "PORT": "4000"
},

// Javascript & TypeScript
"javascript.preferences.quoteStyle": "single",
"typescript.preferences.quoteStyle": "single",
"javascript.validate.enable": false,
"javascript.updateImportsOnFileMove.enabled": "always",
"typescript.updateImportsOnFileMove.enabled": "always",
"javascript.suggest.autoImports": true,
"typescript.suggest.autoImports": true,
"[javascript]": {
"editor.suggestSelection": "recentlyUsed",
"editor.suggest.showKeywords": false
},

// Django
"files.associations": {
"_.html": "html",
"\*\*/templates/_.html": "django-html",
"**/templates/\*": "django-txt",
"**/requirements{/\*_,_}.{txt,in}": "pip-requirements"
},

// Emmet
"emmet.syntaxProfiles": {
"javascript": "jsx"
},
"emmet.includeLanguages": {
"django-html": "html",
"javascript": "javascriptreact",
"typescript": "typescriptreact"
},

// ##################### Extensions ##################### //

// Bracket pair colorizer
"bracket-pair-colorizer-2.colors": [
"#8BE9FD",
"#50FA7B",
"#FFB86C",
"#FF79C6",
"#BD93F9",
"#F1FA8C"
],
"bracket-pair-colorizer-2.colorMode": "Consecutive",
"bracket-pair-colorizer-2.forceUniqueOpeningColor": false,
"bracket-pair-colorizer-2.forceIterationColorCycle": false,
"bracket-pair-colorizer-2.showBracketsInGutter": true,
"bracket-pair-colorizer-2.showBracketsInRuler": true,
"bracket-pair-colorizer-2.showVerticalScopeLine": false,
"bracket-pair-colorizer-2.showHorizontalScopeLine": false,
"bracket-pair-colorizer-2.unmatchedScopeColor": "#FF5555",

// Code runner
"code-runner.clearPreviousOutput": true,
"code-runner.ignoreSelection": true,
"code-runner.saveFileBeforeRun": true,
"code-runner.runInTerminal": true,
"code-runner.preserveFocus": false,
"code-runner.executorMap": {
"python": "python3 -u",
"typescript": "npx ts-node --files --transpile-only"
},

// Colorize (in big files you may want to disable this)
"colorize.hide_current_line_decorations": false,
"colorize.include": [".tsx", ".jsx", ".ts", ".js"],
"colorize.languages": [
"typescriptreact",
"javascriptreact",
"javascript",
"typescript",
"css",
"sass",
"scss",
"less",
"pcss",
"sss",
"stylus",
"xml",
"svg",
"json",
"jsonc",
"yaml"
],
"colorize.colorized_colors": [
// "BROWSERS_COLORS", // this is reaaally annoying
"HEXA",
"RGB",
"HSL"
],
"colorize.enable_search_variables": false,
"editor.wordBasedSuggestionsMode": "allDocuments",
"git.autofetch": true,
"terminal.external.windowsExec": "C:\\Program Files\\Git",
"terminal.integrated.defaultProfile.windows": "Git Bash",
"explorer.compactFolders": false,
"material-ui-snippets.showNotesOnStartup": false,
"eslint.alwaysShowStatus": true,
"editor.formatOnType": true,
"settingsSync.ignoredExtensions": [

],
"settingsSync.ignoredSettings": [

],
"javascript.inlayHints.enumMemberValues.enabled": true,
"javascript.inlayHints.functionLikeReturnTypes.enabled": true,
"javascript.inlayHints.propertyDeclarationTypes.enabled": true,
"javascript.inlayHints.variableTypes.enabled": true,
"typescript.inlayHints.enumMemberValues.enabled": true,
"typescript.inlayHints.functionLikeReturnTypes.enabled": true,
"typescript.inlayHints.parameterTypes.enabled": true,
"typescript.inlayHints.propertyDeclarationTypes.enabled": true,
"typescript.inlayHints.variableTypes.enabled": true,
"javascript.inlayHints.parameterTypes.enabled": true
}
