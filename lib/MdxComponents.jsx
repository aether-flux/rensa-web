import { CodeSnippet } from "@/app/_components/Snippet";

export const mdxComponents = {
  pre: ({children}) => children,
  code: ({className="", children, ...props}) => {
    const match = className.match(/language-(\w+)/);
    const language = match ? match[1] : 'js';

    return <div className="w-1/2 my-4">
      <CodeSnippet language={language} {...props} >
        {children}
      </CodeSnippet>
    </div>
  },
  h1: (props) => <h1 className="font-head font-medium text-primary-text text-5xl/10 my-6" {...props} />,
  h2: (props) => <h3 className="font-head font-medium text-primary-text text-3xl/8 my-6" {...props} />,
  p: (props) => <p className="font-sans text-xl text-secondary-text my-4 w-3/4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 my-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 my-4" {...props} />,
  li: (props) => <li className="font-sans text-xl ml-4">{props.children}</li>,
  a: (props) => (
    <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  strong: (props) => <span className="font-sans text-xl text-secondary-text text font-semibold" {...props} />
}
