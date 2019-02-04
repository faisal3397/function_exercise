//  Factorials

var factorial = function(n){
    if(n <= 1){
        return 1;
    }

    return n * factorial(n-1);
}

// Letter counting

var letterCount = function(string){
    string = string.split("");
    console.log(string);
    let obj = {

    };


    for(let i=0;i<string.length;i++){
        let count = 0;
        for(let j=0;j<string.length;j++){
            if(string[i] === string[j]){
                count++;
                obj[string[i]] = count;
            }
            
        }

    }


    return obj;
}

console.log(letterCount("abdullah"));

// Unique Array - Difference
var uniqueArrDiff = function(arr1, arr2){
    var uniqueArr = []
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i]) == -1){
            uniqueArr.push(arr1[i]);
        }
    }

    for(let j=0;j<arr2.length;j++){
        if(arr1.indexOf(arr2[j]) == -1){
            uniqueArr.push(arr2[j]);
        }
    }

    return uniqueArr;
}


// Unique Array - Intersection
var uniqueArrInter = function(arr1, arr2){
    var uniqueArr = []
    for(let i=0;i<arr1.length;i++){
        
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                uniqueArr.push(arr1[i]);
            }
        }
    }

    return uniqueArr;
}
var arr1 = [1,2,3];
var arr2 = [2,3,4];
console.log(uniqueArrDiff(arr1, arr2));
console.log(uniqueArrInter(arr1, arr2));
