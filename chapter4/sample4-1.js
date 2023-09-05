let animals = ["dog", "cat", "bird"];
//dog 0 | cat 1 | bird 3 
console.log(animals[0]);
console.log(animals);
console.log(animals.length);

animals[2] = "lion";
console.log(animals);

//add
animals.push ("tiger");
console.log(animals);
//top add
animals.unshift("elephant");
console.log(animals);

//Delete
animals.pop();
console.log(animals);
//Top delete
animals.shift();
console.log(animals);

/*---------------------------------------*/

let fruits = ["Apple", "Orange", "Lemon", "Banana", "Peach"];

for(let i = 0; i < fruits.length; i++){
    document.write("<li>" + fruits[i] + "</li>")
}

let staff = [
    ["Andrew", 41, "America"],
    ["Bendy", 25, "United Kingdom"],
    ["Saito", 34, "Tokyo"]
];
for(let i = 0; i < staff.length; i++){
    document.write("<tr>");
    for(let j = 0; j = staff[i].length; j++){
        document.write("<td>" + staff[i][j] + "</td>");
    }
    document.write("</tr>")
}
for(let line of staff){
    document.write("<tr>");
    for(let elem of line){
        document.write("<td>" + elem + "</td>");
    }
    document.write("</tr>")
}

let or = [
    ["Yes", 0],
    ["No", 1],
];

for(let name of fruits){
    document.write("<ul>" + "<li>" + name + "</li>" + "</ul>");
}

let numbers = ["Zero", "One", "Two", "Three", "Four", "Five"];
for(let i = 0; i < numbers.length; i++){
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + numbers[i] + "</td>");
    document.write("</tr>");
}

/*---------------------------------------*/

let dict = {apple:"りんご", banana:"バナナ", orange:"オレンジ"};
console.log(dict.apple);
//same
console.log(dict["apple"]);

console.log(dict);

dict.apple = "林檎";
console.log(dict);

let countries = {
    Japan:"日本",
    USA:"アメリカ",
    China:"中国",
    Korea:"韓国"
};
//key        | 変数 
//countries  | 連想配列
for(let key in countries){
    document.write("<tr>");
    document.write("<th>" + key + "</th>");
    document.write("<td>" + countries[key] + "</td>");
}

//Json
let companies = [
    {
        name:"Google",
        company:"Alphabet Inc.",
        founding:1998,
        url:"https://www.google.com/ja"
    },
    {
        name:"Apple",
        company:"Apple Inc.",
        founding:1976,
        url:"https://www.Apple.com/"
    },
    {
        name:"Facebook",
        company:"Meta Platform, Inc.",
        founding:2004,
        url:"https://www.meta.com/"
    },{
        name:"Amazon",
        company:"Aamazon.com, Inc.",
        founding:1994,
        url:"https://wwww.amazon.com/"
    },
    {
        name:"Microsoft",
        company:"Microsoft Corporation",
        founding:1975,
        url:"https://www.microsoft.com/ja"
    },
];
//GAFAM
for(let company of companies){
    document.write("<tr>");
    for(let key in company){
        let data = company[key];
        if(key == url){
            data = "<a href=\"" + data + "\">" + data + "</a>";
        }
        document.write("<td>" + data + "</td>");
    }
    document.write("</tr>");
}