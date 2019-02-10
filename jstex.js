// global regex
let regtexnc = new RegExp(Object.keys(mapsym).sort((a,b) => a.length<b.length).reduce((acc, x) => acc + x + "|", "\\\\(?:").slice(0, -1) + ")", 'g');
let regtexc = new RegExp(Object.keys(mapsym).sort((a,b) => a.length<b.length).reduce((acc, x) => acc + x + "|", "\\\\(").slice(0, -1) + ")", 'g');

let jstex = (function(){
    // Source: https://stackoverflow.com/a/4835406/4498826
    let escapeHtml = text => {
        let map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    };
    
    let map = m => { return mapsym[m.slice(1)]; };
    return (text, htmlescape) => {
        if (htmlescape)
            text = escapeHtml(text);
        return text.replace(regtexnc, map);
    };
})();
