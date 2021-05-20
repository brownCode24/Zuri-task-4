// creating a function to convert fahrenheit to celsius



// function convertFahrToCelsius(F){
//     let Celsius;
//     Celsius = (F - 32) * 5/9;
//     if(typeof(F) ==="string"){
//         return `${F} is not a valid number but a/an string`;
//     }else if(F.length > 1){
//         return `${F} is not a valid number but a/an array`;
//     }else if(typeof(F) === "boolean"){
//         return `${F} is not a valid number but a/an boolean`;
//     }else if(typeof(F) === "object"){
//         return `${F} is not a valid number but a/an object`;
//     }else{
//         return Celsius.toFixed(4);
//     }
    
// }
   
   

// convertFahrToCelsius();

function convertFahrToCelsius(F){
    let input = Object.prototype.toString.call(F);

    if(isNaN(F)){
        let parameter = input.split(" ");
        parameter[1] = parameter[1].substring(0, parameter[1].length-1);
        return ` ${JSON.stringify(F)} is not a valid number but a/an ${parameter[1]}`;
    }

    let Celsius = ((F-32)* 5/9).toFixed(4);
    return Celsius;
}

const checkYuGiOh = (n)=> {
let A = [];

if(isNaN(n) || parseInt(n) < 1){
    return ` invalid parameter: ${n}`;
}

for(let i=1; i <= n; i++){
    let cstring = [];
    let str = "";

    (i % 2 == 0) ? (cstring.push("yu")) : "";
    (i % 3 == 0) ? (cstring.push("gi")) : "";
    (i % 5 == 0) ? (cstring.push("oh")) : "";

    str = cstring.join("-");

    (str) ? (A.push(str)) : (A.push(i));
    console.log(A);
    return A;
};



}


checkYuGiOh();