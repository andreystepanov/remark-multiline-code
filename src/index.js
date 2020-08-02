import visit from 'unist-util-visit-parents'

export default function multilineCode() {
  return transform
}

function transform(tree) {
  visit(tree, 'inlineCode', onInlineCode)
}

function onInlineCode(node, ancestors) {
  const path = ancestors.map(a => a.type)
  const parent = ancestors.pop()

  if (
    path.includes('blockquote') === false &&
    path.pop() === 'paragraph' &&
    ((parent.children.length === 1 && parent.children[0] === node) ||
      node.value.includes('\n'))
  ) {
    node.type = `code`
  }
}
