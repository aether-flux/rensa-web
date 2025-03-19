import { CodeSnippet } from "./Snippet";

export const mdxComponents = {
  pre: ({children}) => children,
  code: ({className="", children, ...props}) => {
    const match = className.match(/language-(\w+)/);
    const language = match ? match[1] : 'js';

    return <CodeSnippet language={language} {...props} >
      {children}
    </CodeSnippet>
  }
}
