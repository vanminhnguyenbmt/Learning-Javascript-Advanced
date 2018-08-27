function b() {
    c();
    function c() {
        d();
        function d() {
            console.log(text);
        }
    }
}

function a() {
    var text = "in a";
    b();
}

a();
var text = "in gloal";