// get real wordcount of a string which is written in markdown grammar
// input:  String
// output: Number

let getWordCount = (text) => {
    
    if (text == "" || !text) {
        return 0;
    }

    // exclude YAML Frontmatter (---\n YAML Frontmatter \n---)
    // all meta data inside the frontmatter marks will be excluded
    text = text.replace(/---.*?:\s.*?---/ms, "");
    allText = allText.replace(/---/g, "");

    // exclude enter (\n)
    text = text.replace(/\n*/msg, "");

    // exclude markdown header marks and space(# , ## , ### , #### , ...)
    // header text will be included in the wordcount
    text = text.replace(/#*\s*/msg, "");

    // exclude markdown comment (%% comment text %%)
    // all comment text inside the comment marks will be excluded
       allText = allText.replace(/%%.*?%%/msg, "");

    // exclude wiki link marks ([[text]])
    // text inside the [[]] mark will be included in the wordcount
    text = text.replace(/\[\[/msg, "");
    text = text.replace(/\]\]/msg, "");
    
    // exclude markdown format marks (Bord: **text**, Italics: *text*, Highlight: ==text==, Delete: ~~text~~ )
    // text inside the format marks will be included in the wordcount
    text = text.replace(/\*\*|\*|==|~~/msg, "");

    return text.length;
}
