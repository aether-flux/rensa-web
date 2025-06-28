import { CodeSnippet } from "@/app/_components/Snippet";

export const mdxComponents = {
  pre: ({children}) => children,
  code: ({className="", children, ...props}) => {
    const match = className.match(/language-(\w+)/);
    const language = match ? match[1] : 'js';

    return <div className="w-2/3 my-4">
      <CodeSnippet language={language} {...props} >
        {children}
      </CodeSnippet>
    </div>
  },
  h1: (props) => <h1 className="font-head font-medium text-primary-text text-2xl md:text-3xl/10 my-6" id={`${props.children}`} {...props} />,
  h2: (props) => <h3 className="font-head font-medium text-primary-text text-xl md:text-2xl/8 mb-6 mt-20" id={`${props.children}`} {...props} />,
  h3: (props) => <h4 className="font-head font-medium text-primary-text text-lg md:text-xl/6 mb-0 mt-10" id={`${props.children}`} {...props} />,
  p: (props) => <p className="font-sans text-sm md:text-lg text-secondary-text my-4 w-3/4" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 my-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 my-4" {...props} />,
  li: (props) => <li className="font-sans text-sm md:text-lg ml-4">{props.children}</li>,
  a: (props) => (
    <a className="text-primary-text font-sans font-medium underline hover:no-underline" rel="noopener noreferrer" {...props} />
  ),
  strong: (props) => <span className="font-sans text-sm md:text-lg text-secondary-text text font-semibold" {...props} />
 }
