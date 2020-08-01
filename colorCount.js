// array = [['red',
//'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
//'green', 'green', 'red', 'green', 'blue'];

(function countArray(colorArray) {

if(colorArray.length > 0) {

    let colorJson = {}; 
    for(let i = 0 ; i < colorArray.length ; i++) {
        if(!colorJson[colorArray[i]]) 
            colorJson[colorArray[i]] = 1;
         else 
            colorJson[colorArray[i]] ++;
        if(!colorJson.max) colorJson.max = colorArray[i];
        else colorJson.max =  colorJson[colorJson.max] < colorJson[colorArray[i]] ? colorArray[i] : colorJson.max;
        
        
    }
    console.log(`${colorJson.max} has appeared ${colorJson[colorJson.max]} number of times `);
    return colorJson.max;
}
    console.log('No input received!')
    
})(process.argv.slice(2));