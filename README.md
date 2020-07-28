# remark-multiline-code

> [remark](https://github.com/remarkjs/remark) plugin to turn `inlineCode` with multiline into `code` type

# Installation

```
npm install remark-multiline-code --save
```

# Usage

Say we have the following file, `example.md`:

```markdown
# Post title

Some post content...

`const param = true

console.log(param)`
```

```javascript
const vfile = require('to-vfile')
const remark = require('remark')
const multilineCode = require('remark-multiline-code')

remark()
  .use(multilineCode)
  .use({ settings: { fences: true } })
  .process(vfile.readSync('example.md'), function (err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

````markdown
# Post title

Some post content...

```
const param = true
console.log(param)
```
````
