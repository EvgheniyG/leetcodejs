var convert = function(s, numRows) {
    if (numRows < 2) {
      return s;
    }
    var matrix = [];
    for (var i = 0; i < numRows; i++) {
        matrix.push([]);
    }
    var k = 0;
    var i = 0;
    var res = '';
    while (k < s.length) {
        while(i < matrix.length && k < s.length) {
            matrix[i].push(s[k]);
            i++;
            k++;
        }
        i = i-2;
        while (i >= 0 && k < s.length) {
            matrix[i].push(s[k])
            i--;
            k++;
        }
        i = i+2;
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var k = 0; k < matrix[i].length; k++) {
            res += matrix[i][k];
        }
    }
    return res;
};var convert = function(s, numRows) {
    if (numRows < 2) {
      return s;
    }
    var matrix = [];
    for (var i = 0; i < numRows; i++) {
        matrix.push([]);
    }
    var k = 0;
    var i = 0;
    var res = '';
    while (k < s.length) {
        while(i < matrix.length && k < s.length) {
            matrix[i].push(s[k]);
            i++;
            k++;
        }
        i = i-2;
        while (i >= 0 && k < s.length) {
            matrix[i].push(s[k])
            i--;
            k++;
        }
        i = i+2;
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var k = 0; k < matrix[i].length; k++) {
            res += matrix[i][k];
        }
    }
    return res;
};