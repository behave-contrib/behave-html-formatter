function Collapsible_toggle(id) {
    var elem = document.getElementById(id);
    elem.style.display = (elem.style.display == 'none' ? 'block' : 'none');
    return false;
}

function Collapsible_expandAll(className) {
    var elems = document.getElementsByClassName(className);
    for (var i=0; i < elems.length; i++) {
        elems[i].style.display = 'block';
    }
}

function Collapsible_collapseAll(className) {
    var elems = document.getElementsByClassName(className);
    for (var i=0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }
}

function Collapsible_expandAllFailed() {
    var elems = document.getElementsByClassName('failed');
    for (var i=0; i < elems.length; i++) {
        var elem = elems[i];
        if (elem.nodeName == 'H3') {
            elem.parentElement.getElementsByTagName('ol')[0].style.display = 'block';
        }
    }
}
