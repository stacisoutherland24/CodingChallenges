function capitalize(paragraph) {
    let result = '';
    let capitalize = true;

    for (let i = 0; i < paragraph.length; i++) {
        let char = paragraph[i];
        let isLetter = char >= "a" && char <="z"
        if(isLetter && capitalize){
           result += char.toUpperCase();
           capitalize=false;
        }else {
            result += char
        }

         if (char === '.' || char === '?' || char === '!') {
            capitalize = true;
        }


    }
        console.log(result)
        return paragraph;
}

// capitalize("this is a simple sentence.")
// capitalize(".....")
capitalize("hello world. how are you?")