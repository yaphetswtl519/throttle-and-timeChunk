var timeChunk = function (ary, fn, count) {
    var obj,
        t,
        len = ary.length;

    var start = function () {
        for (var i = 0; i < Math.min(count || 1, len); i++) {
            obj = ary.shift();
            fn(obj);
        }
    };

    return function () {
        t = setInterval(function () {
            if (arr.length === 0) {
                return clearInterval(t);
            }
            start();
        }, 200);
    }
};

var arr = [];
for (var i = 0; i <= 10000; i++) {
    arr.push(i);
}

var render = timeChunk(arr, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 8);