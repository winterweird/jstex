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
    let texmap = texmath();
    return text => {
        let rstr = Object.keys(texmap).reduce((acc, x) => acc + x + "|", "\\\\(").slice(0, -1) + ")";
        
        let regex = new RegExp(rstr, 'g');

        return escapeHtml(text).replace(regex, m => { return texmap[m.slice(1)]; });
    };
});
