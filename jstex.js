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
    
    let rstr = Object.keys(mapsym).reduce((acc, x) => acc + x + "|", "\\\\(").slice(0, -1) + ")";
    let regex = new RegExp(rstr, 'g');
    let map = m => { return mapsym[m.slice(1)]; };
    return (text, htmlescape) => {
        if (htmlescape)
            text = escapeHtml(text);
        return text.replace(regex, map);
    };
})();
