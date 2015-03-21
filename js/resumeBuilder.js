var s = "audacity";

var udacityizer = function(s) {  
    s = s[1].toUpperCase() + s.slice(2);
    
    
    return s;
};

console.log(udacityizer(s));