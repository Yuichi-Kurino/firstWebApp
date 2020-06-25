function printName(val){
    console.log(val);

}

function printHello(){
    console.log("Hello World");

}

function changeVar(val){
    return val+"helloWorld";
}

module.exports={
    printName,
    printHello,
    changeVar
};