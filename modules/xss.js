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

exports.removeTags = (html) => {
    var oldHtml;
    do {
        oldHtml = html;
        html = html.replace(tagOrComment, '');
    } while (html !== oldHtml);
    html=html.replace(/>/g, '$@5;');
    return html.replace(/</g, '&lt;');
}