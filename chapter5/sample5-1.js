function average(n1, n2){
    let n = (n1+n2)/2;
    return n;
}

let num1 = 11;
let num2 = 16;

let n = average(num1, num2)

document.write(n + "<br>");

function maxnumber(n1, n2){
    if(n1 > n2){
        return n1;
    }
    else{
        return n2;
    }
}

let num3 = 100;
let num4 = 200;

let max_result = maxnumber(num3, num4)

document.write(max_result + " の方が大きい。<br>")

function drawstar(n){
    for(let i = 0; i < n; i++){
        document.write("★");
    }
}

drawstar(10);

function Hello(){
    document.write("Hello World");
}

Hello();

document.write("<br>")

let a  = "グローバル";

function func(){
    let b = 1;
    document.write(b+a + "<br>");
}

func();
document.write(a + "<br>");

const f = function(a, b){
    return a+b;
}

let ans = f(1, 10)
document.write(ans)

const fruits = ["バナナ", "りんご", "みかん", "スイカ"];
const country = ["米国", "日本", "中国", "韓国"];

fruits.forEach(function(item1){
    document.write("<li>" + item1 + "</li>");
});

document.write("<br>");

country.forEach(function(item2){
    document.write("<li>" + item2 + "</li>");
});

document.write("<br>");

const Chemical_formula = [["銅", 1, "Cu"], ["銀", 2, "Ag"], ["金", 3, "Au"]];

Chemical_formula.forEach(function(item3){
    document.write("<tr>")
    item3.forEach(function(data){
        document.write("<td>" + data + "</td>")
    });
    document.write("<tr>")
});

document,write("<br>")

let button1 = document.getElementById("btn");
let textBox1 = document.getElementById("text");

button1.addEventListener("click", function(){
    if(textBox1.value != null){
        window.alert("名前: " + textBox1.value)
    }
    else{
        window.alert("テキストが null です")
    }
});

function getTextName(){
    if(textBox1.value != null){
        window.alert("名前: " + textBox1.value)
    }
    else{
        window.alert("テキストが null です")
    }
}