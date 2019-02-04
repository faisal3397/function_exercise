var obj = {

    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
}


var morseCode = function(char){
    char = char.split("");
    let morse = "";
    for(let i=0; i<char.length;i++){
        for(var key in obj){
            if(char[i] == key){
                morse += obj[key];
            }
        }
    }
    return morse;
}

console.log(morseCode("hello world"));
console.log(morseCode("we love javascript"));

var revmorseCode = function(char){
    let revmorse = "";
    char = char.split(" ");
    //console.log(char);
    for(let x=0;x<char.length;x++){
        for(var key in obj){
            if(char[x] == obj[key]){
                revmorse = revmorse + key;
            }
        }
        revmorse += " " 
    }
    revmorse = revmorse.split("   ");

    let sent = ""
    let split = ""
    for(let y=0;y<revmorse.length;y++){
        split = revmorse[y].split(" ");
        for(let j=0;j<split.length;j++){
            if(split[j]===''){
                sent = sent + " " + split[j];
            }else{
                sent += split[j];
            }
        }
    }

    return sent;

}
console.log(revmorseCode("... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."));
console.log(revmorseCode("-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-"));
console.log(revmorseCode("- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --."));

