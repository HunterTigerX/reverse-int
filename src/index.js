module.exports = function reverse(n) {
        if (n > 0) {
            return Number(n.toString().split("").reverse().join(""));
         } else {
             let moduleN = (n - n - n);
            return Number(moduleN.toString().split("").reverse().join(""));
    }
}
