var btn = document.getElementById("generate");
btn.onclick = function() {
    var howmany = document.getElementById("howmany").value;
    var len = historic_cards.length;
    var out = "";
    for(var i = 0; i < howmany; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + historic_cards[idx] + "\n";
    }
    document.getElementById("pool").value = out;
}