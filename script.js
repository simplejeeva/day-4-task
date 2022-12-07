//1 .how to compare two json have the same properties without order?
//var obj1 ={name:"person1",age :5};
//var obj2 ={age:5,name:"person1"};
var obj1 ={name:"person1",age :5};
var obj2 ={age:5,name:"person1"};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

//2.use the rest countries and display all the country flags in the console
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var data = request.response
    var result=JSON.parse(data)
    for (var i=0;i<result.length;i++){
       console.log(result[i].flags);
    }
    }
//3.use the same rest countries and print all countries name,regian,sub regian and population 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var data = request.response
    var result=JSON.parse(data)
    for (var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
    }
    }
