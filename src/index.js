import visit from 'unist-util-visit'

export default function multilineCode() {
  return transform
}

function transform(tree) {
  visit(tree, 'inlineCode', onInlineCode)
}

function onInlineCode(node, index, parent) {
  if (
    parent.type === 'paragraph' &&
    ((parent.children.length === 1 && parent.children[0] === node) ||
      node.value.includes('\n'))
  ) {
    node.type = `code`
  }
}
