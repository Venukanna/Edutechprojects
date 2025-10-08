
import { useState, useEffect } from "react";
import "./Codecompiler.css";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

const LANGUAGES = [
  { id: "java", name: "Java", icon: "Ja" },
  { id: "python", name: "Python", icon: "Py" },
  { id: "c", name: "C", icon: "C" },
  { id: "cpp", name: "C++", icon: "C++" },
  { id: "javascript", name: "JavaScript", icon: "JS" },
  { id: "html", name: "HTML", icon: "HTML" },
];

export default function CodeCompiler() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("java"); // Default to Java
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState("light");
  const [outputStatus, setOutputStatus] = useState("idle");
  const [activeFile, setActiveFile] = useState("html");
  const [isLoading, setIsLoading] = useState(false);
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
<html>
<head>
  <title>Hello, World!</title>
  <style>
    /* CSS will be inserted here */
  </style>
</head>
<body>
  <h1 class="title">Hello World!</h1>
  <p id="currentTime"></p>
  <script>
    // JS will be inserted here
  </script>
</body>
</html>`
  );
  const [cssCode, setCssCode] = useState(
    `.title {
  color: #2c3e50;
  text-align: center;
  font-family: Arial, sans-serif;
}`
  );
  const [jsCode, setJsCode] = useState(
    `document.getElementById('currentTime').textContent = 
  'Current time: ' + new Date().toLocaleTimeString();`
  );
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Updated language code structure validation rules
  const languageValidators = {
    java: code => {
      const hasMainClass = /class\s+Main\s*\{/.test(code);
      const hasMainMethod = /public\s+static\s+void\s+main\s*\(/.test(code);
      
      if (!hasMainClass) {
        return {
          isValid: false,
          message: "Hey! For Java code to run properly, please use 'Main' as your class name. Like this: 'public class Main { ... }'"
        };
      }
      if (!hasMainMethod) {
        return {
          isValid: false,
          message: "Don't forget to add the main method! Include this in your Main class: 'public static void main(String[] args) { ... }'"
        };
      }
      return { isValid: true, message: "" };
    },
    python: code => {
      const isValid = /def\s+\w+|print\(|import\s+/.test(code) && !/class\s+\w+|public\s+static\s+void\s+main/.test(code);
      return {
        isValid,
        message: isValid ? "" : "This doesn't look like Python code. Try using Python syntax like 'print()', 'def', or 'import' statements."
      };
    },
    cpp: code => {
      const isValid = /#include\s+<|int\s+main\s*\(\)/.test(code) && !/std::/.test(code);
      return {
        isValid,
        message: isValid ? "" : "This doesn't look like C++ code. Try using C++ syntax like '#include' or 'int main()'."
      };
    },
    c: code => {
      const isValid = /#include\s+<|int\s+main\s*\(\)/.test(code) && !/std::/.test(code);
      return {
        isValid,
        message: isValid ? "" : "This doesn't look like C code. Try using C syntax like '#include' or 'int main()'."
      };
    },
    javascript: code => {
      const isValid = /function\s+\w+|console\.log|let\s+|const\s+|var\s+/.test(code);
      return {
        isValid,
        message: isValid ? "" : "This doesn't look like JavaScript code. Try using JavaScript syntax like 'function', 'console.log', or 'let/const/var'."
      };
    },
  };

  // Real-time validation effect
  useEffect(() => {
    if (language === "html") {
      setValidationError("");
      return;
    }
    if (!code.trim()) {
      setValidationError("");
      return;
    }
    const validator = languageValidators[language];
    if (validator) {
      const result = validator(code);
      if (!result.isValid) {
        setValidationError(result.message);
      } else {
        setValidationError("");
      }
    } else {
      setValidationError("This language is not supported. Please select a supported language from the dropdown.");
    }
  }, [code, language]);

  const submitCode = async () => {
    if (validationError) {
      setOutput(validationError);
      setOutputStatus("error");
      return;
    }
    if (language === "html") {
      try {
        setOutputStatus("running");
        setIsLoading(true);
        setOutput("Running HTML code...");

        // Create a complete HTML document with proper script and style tags
        const fullHtml = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Profile Card</title>
            <style>
              ${cssCode}
            </style>
          </head>
          <body>
            ${htmlCode}
            <script>
              ${jsCode}
            </script>
          </body>
          </html>
        `;

        setOutput(fullHtml);
        setOutputStatus("success");
      } catch (error) {
        setOutput(`Error: ${error.message}`);
        setOutputStatus("error");
      } finally {
        setIsLoading(false);
      }
      return;
    }

    try {
      setOutputStatus("running");
      setIsLoading(true);
      setOutput("Submitting your code...");

      // Check if code matches the selected language
      const validator = languageValidators[language];
      if (validator) {
        const result = validator(code);
        if (!result.isValid) {
          setOutput(result.message || "Code does not match the selected language. Please check your code and try again.");
          setOutputStatus("error");
          setIsLoading(false);
          return;
        }
      }

      const request = {
        code,
        language,
        input
      };

      const response = await fetch("http://localhost:1234/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        setOutput(result.error);
        setOutputStatus("error");
      } else {
        setOutput(result.output || "Code executed successfully with no output");
        setOutputStatus("success");
      }
    } catch (error) {
      console.error("Execution error:", error);
      setOutput(`Error: ${error.message}`);
      setOutputStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const clearOutput = () => {
    setOutput("");
    setOutputStatus("idle");
  };

  const renderEditor = () => {
    if (language !== "html") {
      return (
        <textarea
          placeholder={`// Write your ${
            LANGUAGES.find((l) => l.id === language)?.name || ""
          } code here...\n${language === "java" ? 'public class Main {\n    public static void main(String[] args) {\n        \n    }\n}' : ''}`}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />
      );
    }

    switch (activeFile) {
      case "html":
        return (
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            spellCheck="false"
            placeholder="<!DOCTYPE html>
<html>
<head>
  <title>Your Page</title>
</head>
<body>
  <!-- Your HTML content here -->
</body>
</html>"
          />
        );
      case "css":
        return (
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            spellCheck="false"
            placeholder="/* Your CSS styles here */
body {
  /* Example styles */
}"
          />
        );
      case "js":
        return (
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            spellCheck="false"
            placeholder="// Your JavaScript code here
function example() {
  // Example function
}"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="code-compiler">
        <div className="sidebar">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.id}
              className={`sidebar-item ${language === lang.id ? "active" : ""}`}
              onClick={() => {
                setLanguage(lang.id);
                if (lang.id === "html") setActiveFile("html");
              }}
              title={lang.name}
            >
              {lang.icon}
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="header">
            <h1>"Turn Ideas into Magic — This Playground is Yours!"🚀🎮💡</h1>
            <div className="theme-switch">
              <button
                className={theme === "light" ? "active" : ""}
                onClick={() => toggleTheme("light")}
              >
                Light
              </button>
              <button
                className={theme === "dark" ? "active" : ""}
                onClick={() => toggleTheme("dark")}
              >
                Dark
              </button>
            </div>
          </div>

          <div className="toolbar">
            <div className="language-select">
              <select
                value={language}
                onChange={(e) => {
                  const newLang = e.target.value;
                  setLanguage(newLang);
                  if (newLang === "html") setActiveFile("html");
                }}
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            {language === "html" && (
              <div className="file-tabs">
                <button
                  className={activeFile === "html" ? "active" : ""}
                  onClick={() => setActiveFile("html")}
                >
                  index.html
                </button>
                <button
                  className={activeFile === "css" ? "active" : ""}
                  onClick={() => setActiveFile("css")}
                >
                  styles.css
                </button>
                <button
                  className={activeFile === "js" ? "active" : ""}
                  onClick={() => setActiveFile("js")}
                >
                  script.js
                </button>
              </div>
            )}
            <button
              className="run-button"
              onClick={submitCode}
              disabled={isLoading || !!validationError}
            >
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                <span>▶</span>
              )}
              Run Code
            </button>
          </div>

          <div className="workspace-container">
            <div className="editor-container">
              <div className="section-header">
                <span>
                  {language === "html"
                    ? `Editor (${activeFile})`
                    : "Editor"}
                </span>
              </div>
              <div className="code-editor">
                {renderEditor()}
              </div>
            </div>

            <div className="right-side-container">
              {language !== "html" && (
                <div className="inputt-container">
                  <div className="section-header">
                    <span>Input (stdin)</span>
                  </div>
                  <div className="input-content">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter program input here..."
                    />
                  </div>
                </div>
              )}
              <div className="output-container">
                <div className="section-header">
                  <span>Output</span>
                  <button className="clear-button" onClick={clearOutput}>
                    Clear
                  </button>
                </div>
                <div className="output-content">
                  {validationError ? (
                    <pre className="output-pre error">{validationError}</pre>
                  ) : isLoading ? (
                    <div className="loading-state">
                      <div className="spinner"></div>
                      <p>Processing your code...</p>
                    </div>
                  ) : language === "html" && output ? (
                    <iframe
                      title="output"
                      srcDoc={output}
                      sandbox="allow-scripts"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        backgroundColor: "white",
                      }}
                    />
                  ) : (
                    <pre className={`output-pre ${outputStatus}`}>
                      {output || "Your code output will appear here..."}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



// import { useState, useEffect } from "react";
// import "./CodeCompiler.css";
// import ReactSandpackPlayground from "../components/ReactSandpackPlayground";
// import Footer from "../components/Shared/Footer";
// import Navbar from "../components/Shared/Navbar";

// const LANGUAGES = [
//   { id: "java", name: "Java", icon: "Ja" },
//   { id: "python", name: "Python", icon: "Py" },
//   { id: "c", name: "C", icon: "C" },
//   { id: "cpp", name: "C++", icon: "C++" },
//   { id: "javascript", name: "JavaScript", icon: "JS" },
//   { id: "html", name: "HTML", icon: "HTML" },
//   { id: "react", name: "React", icon: "⚛️" },
// ];

// const REACT_FILES = {
//   "App.js": `export default function App() {
//   return <h1>Hello world</h1>
// }`,
//   "index.js": `import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// createRoot(document.getElementById("root")).render(<App />);`,
//   "package.json": `{
//   "name": "react-app",
//   "version": "1.0.0",
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   }
// }`,
//   "styles.css": `.title {
//   color: #2c3e50;
//   text-align: center;
//   font-family: Arial, sans-serif;
// }`,
//   "index.html": `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>React Output</title>
//   </head>
//   <body>
//     <div id="root"></div>
//   </body>
// </html>`,
// };

// const REACT_FILE_ORDER = [
//   "App.js",
//   "index.js",
//   "package.json",
//   "styles.css",
//   "index.html",
// ];

// const DEFAULT_CODES = {
//   java: `public class Main {
//   public static void main(String[] args) {
//     System.out.println("Hello world");
//   }
// }`,
//   python: `print("Hello world")`,
//   c: `#include <stdio.h>
// int main() {
//   printf("Hello world\\n");
//   return 0;
// }`,
//   cpp: `#include <iostream>
// int main() {
//   std::cout << "Hello world" << std::endl;
//   return 0;
// }`,
//   javascript: `console.log("Hello world");`,
//   html: `<!DOCTYPE html>
// <html>
// <head>
//   <title>Hello, World!</title>
//   <style>
//   .title {
//     color: #2c3e50;
//     text-align: center;
//     font-family: Arial, sans-serif;
//   }
//   </style>
// </head>
// <body>
//   <h1 class="title">Hello World!</h1>
//   <p id="currentTime"></p>
//   <script>
//     document.getElementById('currentTime').textContent =
//       'Current time: ' + new Date().toLocaleTimeString();
//   </script>
// </body>
// </html>`,
//   react: REACT_FILES["App.js"],
// };

// export default function CodeCompiler() {
//   const [language, setLanguage] = useState("java");
//   const [code, setCode] = useState(DEFAULT_CODES["java"]);
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [theme, setTheme] = useState("light");
//   const [activeFile, setActiveFile] = useState("App.js");
//   const [isLoading, setIsLoading] = useState(false);
//   const [htmlCode, setHtmlCode] = useState(DEFAULT_CODES["html"]);
//   const [cssCode, setCssCode] = useState("");
//   const [jsCode, setJsCode] = useState("");
//   const [reactFiles, setReactFiles] = useState({ ...REACT_FILES });
//   const [validationError, setValidationError] = useState("");

//   // Theme effect
//   useEffect(() => {
//     document.body.setAttribute("data-theme", theme);
//   }, [theme]);

//   // Language change effect
//   useEffect(() => {
//     if (language === "react") {
//       setActiveFile("App.js");
//       setReactFiles({ ...REACT_FILES });
//       setCode(REACT_FILES["App.js"]);
//     } else if (language === "html") {
//       setActiveFile("html");
//       setCode(htmlCode);
//     } else {
//       setActiveFile(language);
//       setCode(DEFAULT_CODES[language]);
//     }
//     setOutput("");
//     setValidationError("");
//   }, [language]);

//   // File tab change effect
//   useEffect(() => {
//     if (language === "react" && activeFile) {
//       setCode(reactFiles[activeFile]);
//     } else if (language === "html") {
//       if (activeFile === "html") setCode(htmlCode);
//       if (activeFile === "css") setCode(cssCode);
//       if (activeFile === "js") setCode(jsCode);
//     }
//   }, [activeFile]);

//   // Validators for some languages
//   const languageValidators = {
//     java: code => {
//       const hasMainClass = /class\s+Main\s*\{/.test(code);
//       const hasMainMethod = /public\s+static\s+void\s+main\s*\(/.test(code);
//       if (!hasMainClass) {
//         return {
//           isValid: false,
//           message: "For Java code, use 'Main' as your class name: 'public class Main { ... }'",
//         };
//       }
//       if (!hasMainMethod) {
//         return {
//           isValid: false,
//           message: "Add the main method: 'public static void main(String[] args) { ... }'",
//         };
//       }
//       return { isValid: true, message: "" };
//     },
//     python: code => {
//       const isValid = /def\s+\w+|print\(|import\s+/.test(code) && !/class\s+\w+|public\s+static\s+void\s+main/.test(code);
//       return {
//         isValid,
//         message: isValid ? "" : "This doesn't look like Python code. Try using Python syntax like 'print()', 'def', or 'import' statements."
//       };
//     },
//     cpp: code => {
//       const isValid = /#include\s+<|int\s+main\s*\(\)/.test(code);
//       return {
//         isValid,
//         message: isValid ? "" : "This doesn't look like C++ code. Try using C++ syntax like '#include' or 'int main()'."
//       };
//     },
//     c: code => {
//       const isValid = /#include\s+<|int\s+main\s*\(\)/.test(code);
//       return {
//         isValid,
//         message: isValid ? "" : "This doesn't look like C code. Try using C syntax like '#include' or 'int main()'."
//       };
//     },
//     javascript: code => {
//       const isValid = /function\s+\w+|console\.log|let\s+|const\s+|var\s+/.test(code);
//       return {
//         isValid,
//         message: isValid ? "" : "This doesn't look like JavaScript code. Try using JS syntax like 'console.log()' or 'function ...'."
//       };
//     },
//   };

//   // React file change handler
//   const handleReactFileChange = (val) => {
//     setCode(val);
//     setReactFiles(files => ({ ...files, [activeFile]: val }));
//   };

//   // HTML/CSS/JS file change handler
//   const handleHtmlFileChange = (val) => {
//     if (activeFile === "html") setHtmlCode(val);
//     if (activeFile === "css") setCssCode(val);
//     if (activeFile === "js") setJsCode(val);
//     setCode(val);
//   };

//   // Run code (backend call for non-React)
//   const handleRun = async () => {
//     setIsLoading(true);
//     setOutput("");
//     setValidationError("");

//     // Validate code for some languages
//     if (languageValidators[language]) {
//       const validation = languageValidators[language](code);
//       if (!validation.isValid) {
//         setValidationError(validation.message);
//         setIsLoading(false);
//         return;
//       }
//     }

//     // Prepare payload for API
//     let payload;
//     if (language === "html") {
//       payload = {
//         language,
//         code: htmlCode,
//         html: htmlCode,
//         css: cssCode,
//         js: jsCode,
//       };
//     } else if (language === "react") {
//       // Do nothing: React handled by Sandpack
//       setIsLoading(false);
//       return;
//     } else {
//       payload = {
//         language,
//         code,
//         input,
//       };
//     }

//     // Only call backend for non-React
//     if (language !== "react") {
//       try {
//         const res = await fetch("http://localhost:1234/api/execute", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });
//         let data;
//         try {
//           data = await res.json();
//         } catch {
//           setOutput("Error: Backend did not return valid JSON.");
//           setIsLoading(false);
//           return;
//         }
//         setOutput(data.output || data.result || data.error || "No output");
//       } catch (err) {
//         setOutput("Error: " + err.message);
//       }
//     }
//     setIsLoading(false);
//   };

//   // Prepare files for Sandpack
//   const sandpackFiles = {
//     "/App.js": reactFiles["App.js"],
//     "/index.js": reactFiles["index.js"],
//     "/package.json": reactFiles["package.json"],
//     "/styles.css": reactFiles["styles.css"],
//     "/index.html": reactFiles["index.html"],
//   };

//   return (
//     <div className="code-compiler">
//       <Navbar />
//     <div className="compiler-main">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="sidebar-title">Files</div>
//         {LANGUAGES.map((lang) => (
//           <button
//             key={lang.id}
//             className={`sidebar-btn${language === lang.id ? " active" : ""}`}
//             onClick={() => setLanguage(lang.id)}
//             title={lang.name}
//           >
//             {lang.icon}
//           </button>
//         ))}
//       </aside>

//       {/* Editor section */}
//       <section className="editor-section">
//         {/* File tabs for React */}
//         {language === "react" && (
//           <div className="file-tabs">
//             {REACT_FILE_ORDER.map((file) => (
//               <div
//                 key={file}
//                 className={`file-tab${activeFile === file ? " active" : ""}`}
//                 onClick={() => {
//                   setActiveFile(file);
//                   setCode(reactFiles[file]);
//                 }}
//               >
//                 {file}
//               </div>
//             ))}
//           </div>
//         )}
//         {/* File tabs for HTML */}
//         {language === "html" && (
//           <div className="file-tabs">
//             <div
//               className={`file-tab${activeFile === "html" ? " active" : ""}`}
//               onClick={() => setActiveFile("html")}
//             >
//               index.html
//             </div>
//             <div
//               className={`file-tab${activeFile === "css" ? " active" : ""}`}
//               onClick={() => setActiveFile("css")}
//             >
//               styles.css
//             </div>
//             <div
//               className={`file-tab${activeFile === "js" ? " active" : ""}`}
//               onClick={() => setActiveFile("js")}
//             >
//               script.js
//             </div>
//           </div>
//         )}
//         {/* File tab for other languages */}
//         {language !== "react" && language !== "html" && (
//           <div className="file-tab single">{language.toUpperCase()}</div>
//         )}

//         {/* Code editor */}
//         {language === "react" ? (
//           <textarea
//             className="code-editor"
//             value={code}
//             onChange={e => handleReactFileChange(e.target.value)}
//             spellCheck={false}
//           />
//         ) : language === "html" ? (
//           <>
//             {activeFile === "html" && (
//               <textarea
//                 className="code-editor"
//                 value={htmlCode}
//                 onChange={e => handleHtmlFileChange(e.target.value)}
//                 spellCheck={false}
//               />
//             )}
//             {activeFile === "css" && (
//               <textarea
//                 className="code-editor"
//                 value={cssCode}
//                 onChange={e => handleHtmlFileChange(e.target.value)}
//                 spellCheck={false}
//               />
//             )}
//             {activeFile === "js" && (
//               <textarea
//                 className="code-editor"
//                 value={jsCode}
//                 onChange={e => handleHtmlFileChange(e.target.value)}
//                 spellCheck={false}
//               />
//             )}
//           </>
//         ) : (
//           <textarea
//             className="code-editor"
//             value={code}
//             onChange={e => setCode(e.target.value)}
//             spellCheck={false}
//           />
//         )}

//         {/* Input box for stdin */}
//         <div style={{ marginTop: 8 }}>
//           <input
//             type="text"
//             placeholder="Custom input (stdin)..."
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             style={{ width: "100%", padding: 6, marginBottom: 8 }}
//           />
//         </div>

//         {/* Run button and theme toggle */}
//         <div className="editor-actions">
//           <button onClick={handleRun} disabled={isLoading || language === "react"}>
//             {isLoading ? "Running..." : "Run"}
//           </button>
//           <button
//             className="theme-toggle"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             title="Toggle theme"
//           >
//             {theme === "light" ? "🌙" : "☀️"}
//           </button>
//         </div>
//         {/* Validation error */}
//         {validationError && (
//           <div style={{ color: "red", marginTop: 8 }}>{validationError}</div>
//         )}
//       </section>

//       {/* Output section */}
//       <section className="output-section">
//         <div className="output-title">Output</div>
//         {language === "react" ? (
//           <ReactSandpackPlayground files={sandpackFiles} />
//         ) : (
//           <div className="output-area">{output}</div>
//         )}
//       </section>
//     </div>
//     <Footer />
//     </div>
//   );
// }
