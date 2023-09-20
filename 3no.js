//  WAP to find greatest number among any three numbers


const prompt = require("prompt-sync")({ sigint: true })

a = +prompt("enter a value for a")
b = +prompt("enter a value for b")
c = +prompt("enter a value for c")

if(a>b && a>c)
{
    console.log('a is greater than b and c')
}
else if(b>c)
{
    console.log('b is a greater No.')
}
else
{
    console.log('c is the greatest Number')
}
 
