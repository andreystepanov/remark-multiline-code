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

test("Ignores if there's some other content in the paragraph", () => {
  const md = parse('`code` and some text')
  expect(md).toMatchSnapshot()
})

test('turnes inlineCode into code', () => {
  const md = parse('Some text with:\n\n`code`')
  expect(md).toMatchSnapshot()
})

test('ignores inlineCode inside blockquote', () => {
  const md = parse('> `code`\n\n> Quote\n> > Inner quote\n> > `code`')
  expect(md).toMatchSnapshot()
})
