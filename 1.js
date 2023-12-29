// function doTask() {
//     let data = "is doing"
//     return function () {
//         return "ritesh " + data;
//     }
// }

// // console.log(doTask()())

// let value = doTask();
// console.log(value());


function task2(){
    let count = 0;

    function task3(){
        count++;
        console.log(count);
    }

    function task4(){
        count--;
        console.log(count);
    }

    function task5(val){
        count = val;
        console.log(count);
    }

    return {task3,task4,task5};
}

let {task3,task4,task5} = task2();

task3()
task3()
task4()
task4()
task4()
task5(45)