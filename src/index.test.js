import multilineCode from './'
import remark from 'remark'

const parse = data =>
  remark()
    .use(multilineCode)
    .use({ settings: { fences: true } })
    .processSync(data)
    .toString()

test('defined', () => {
  expect(multilineCode).toBeDefined()
  expect(typeof multilineCode).toBe('function')
})

test("ignores is there's more than 1 child in paragraph", () => {
  const md = parse('Some text with `code`')
  expect(md).toMatchSnapshot()
})

test('Single inlineCode inside blockquote', () => {
  const md = parse('> `code`')
  expect(md).toMatchSnapshot()
})

test('turnes inlineCode into code', () => {
  const md = parse('Some text with:\n\n`code`')
  expect(md).toMatchSnapshot()
})
