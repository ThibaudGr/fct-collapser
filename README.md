# Function Collapser

**Function Collapser** is a Visual Studio Code extension that allows you to automatically collapse or expand functions in your code based on a special comment. This extension helps keep your code tidy and easy to navigate by marking functions for collapsing or unwrapping using a simple `// 📂` comment.

## Features

- **Collapse Functions**: Automatically collapses any function marked with the `// 📂` comment.
- **Unwrap Functions**: Expands all previously collapsed functions, making them visible again.

## How to Use

1. **Mark a function for collapsing**:  
   Place the comment `// 📂` right above any function you want to be collapsible.

   ```javascript
   // 📂
   function sayHello() {
       console.log('Hello, World!');
   }

   // 📂
   const greet = (name) => {
       console.log('Hello, ' + name);
   };
   ```

2. **Collapse Functions**:  
   - Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`).
   - Run the command **"Do Collapse Functions"**.
   - Any functions with the `// 📂` comment will collapse.

3. **Unwrap Functions**:  
   - Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`).
   - Run the command **"Do Uncollapse Functions"**.
   - All previously collapsed functions will expand.

## Commands

- `Collapse Functions`: Collapses functions with a `// 📂` comment.
- `Unwrap Functions`: Expands (unfolds) functions that have been collapsed with a `// 📂` comment.

## Installation

1. Download the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/).
2. Install the extension in VS Code.
3. Open any JavaScript or TypeScript file and start using `// 📂` to mark collapsible functions.

## Requirements

- **Languages Supported**: JavaScript (.js) and TypeScript (.ts)
- **VS Code Version**: Requires **VS Code 1.60.0** or higher.

## Known Issues

- The extension only works on JavaScript and TypeScript files.
- It may not recognize some edge cases in syntax like functions within certain inline constructs.

## Release Notes

### 0.0.1

- Initial release of **Function Collapser** with the ability to collapse and expand functions based on the `// 📂` comment.

---

## Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests.