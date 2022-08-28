import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeHighlighter(Code: Element) {
  return (
    <SyntaxHighlighter
      children={<Code />}
      language="javascript"
      style={dark}
    ></SyntaxHighlighter>
  )
}
