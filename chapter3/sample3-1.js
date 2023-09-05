let num1 = 100;
if(num1 >= 100){
    document.write("<p>100以上</p>");
}

let num2 = 100;
console.log(num2 >= 100);

let num3 = 100;
if(num3 >= 100){
    document.write("<p>100以上</p>")
}
else if (num3 <= 100){
    document.write("<p>100未満</p>")
}

let num4 = -1;

/*---------------------------------------*/

let n = "unkown";

switch(n){
    case 1:
        document.write("<p>One</p>");
        break;
    case 2:
        document.write("<p>Two</p>");
        break;
    case 3:
        document.write("<p>Three</p>");
        break;
    default:
        document.write("<p>Other</p>")
}

let n1 = 1;
let n2 = 1;
document.write("<p>n1 = " + n1 + "</p>");
document.write("<p>n2 = " + n2 + "</p>");
if(n1 == 1 && n2 == 1){
    document.write("<p>n1とn2は両方とも1です</p>")
} else if(n1 == 1 || n2 == 1){
    document.write("<p>n1かn2のどちらかが1です</p>")
}
else{
    document.write("n1もn2も1ではありません");
}

let s1 = "Java";
let s2 = "Script"
document.write("<p>s1 = " + s1 + "</p>");
document.write("<p>s2 = " + s2 + "</p>");
if(s1 == "Java"){
    if(s2 == "Script"){
        document.write(s1 + s2);
    }
}else{
    document.write("<p>Unknown</p>")
}

let i = 0;
while(i < 3){
    document.write("<p>I Love Javascript</p>")
    i++;
    if(i==2){
        break;
    }
}

let a = 0;
while(a < 5){
    a++;
    if(a==2){
        continue;
    }
    document.write("<p>" + a + "</p>");
}

//let i = 0; | 初期化処理
//i < 4;     | 条件式
//i++        | 増分処理
for(let i = 0; i < 4; i++){
    document.write("<p>" + i + "</p>");
}

for(let n = 0; n <=10; n++){
    if(n%2 == 1){
        document.write("<p>" + n + "</p>");
    }
}
