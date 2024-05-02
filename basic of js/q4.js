var a1 = [1, 2, 3, 4];
var a2 = [3, 4, 5, 6];
function inter(a1, a2) {
    var set1 = new Set(a1);
    var inter = new Set(a2.filter(item => set1.has(item)));
    return Array.from(inter);
}
var b = inter(a1, a2);
console.log(b); 

