# A JavaScript funtion for markdown word counting without grammar marks

## Introduction

This is a JavaScript funtion to get the real wordcount of a string, which is written in markdown grammar.

It receives a String as input param, 
and excludes all markdown grammar marks (for example: YAML frontmatter, headers, comments...), 
then retruns the length of pure text.

---

## How to use

Copy funtion getWordCount from file getWordCount.js into your js file, and call it with input param of your markdown formated string.

```JavaScript
let markdownText = "---\nfrontMatter: example\n---# Header1 ## Header2 TextTextText";

let wordcount = getWordCount(markdownText);

console.log(wordcount); // Length of "Header1Header2TextTextText"
```

---

## Excluded marks

### YAML Frontmatter

All meta data inside the frontmatter marks will be excluded. 

**Example**

| Input string                                                 | Output length |
| ------------------------------------------------------------ | ------------- |
| "---\n<br/>Title: Example.md\n<br/>created: 2023-01-25\n<br/>modified: 2023-01-26\n<br/>---" | 0             |



---



### Enter (\n)

All "\n" will be excluded in wordcounting. 

**Example**



| Input string | Output length         |
| ------------ | --------------------- |
| "1\n2\n3\n"  | 3  // Length of "123" |





---

### Headers

All markdown header marks and spaces will be excluded, but the text of headers will be included in the wordcount.

**Example**

| Input string | Output length            |
| ------------ | ------------------------ |
| "# Header"   | 6  // Length of "Header" |
| "### Header" | 6  // Length of "Header" |



---

### Comments

All markdown header comment marks(%%) will be excluded, and the comment text inside the %% marks will be excluded as well.

**Example**



| Input string | Output length            |
| ------------ | ------------------------ |
| "# Header"   | 6  // Length of "Header" |
| "### Header" | 6  // Length of "Header" |



**Input string**: "%% Example Comments %%"

**Output length**: 0

---

### Wiki links

All wiki link marks([[]]) will be excluded, but the link text inside the [[]] marks included in the wordcount.

**Example**



| Input string      | Output length                 |
| ----------------- | ----------------------------- |
| "[[ExampleLink]]" | 11 // Length of "ExampleLink" |




---

### Other Markdown formats

All Marks of Bord(**text**), Italics(*text*), Highlight(==text==), Delete(~~text~~) will be exclued.

But text inside the format marks will be included in the wordcount.



**Example**



| Input string | Output length         |
| ------------ | --------------------- |
| "**text**"   | 4 // Length of "text" |
| "*text*"     | 4 // Length of "text" |
| "==text=="   | 4 // Length of "text" |
| "~~text~~"   | 4 // Length of "text" |

