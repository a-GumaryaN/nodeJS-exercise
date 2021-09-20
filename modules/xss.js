const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

const tagOrComment = new RegExp(
    '<(?:'
    // Comment body.
    +
    '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    +
    '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*' +
    '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    +
    '|/?[a-z]' +
    tagBody +
    ')>',
    'gi'
);

const removeTags = (html) => {
    var oldHtml;
    do {
        oldHtml = html;
        html = html.replace(tagOrComment, '');
    } while (html !== oldHtml);
    html=html.replace(/>/g, '$@5;');
    return html.replace(/</g, '&lt;');
}


console.log(removeTags('<a href="#" alireza class=" logo "> alireza <img src = "../assets/img/logo.png"alt = "" > a lire  <//>za</a>alireza'));