let a=10;
let b=15;
let t;
let gcd;
if(a>b)
{
t=a;
}
else
{
t=b;
}
let i;

for(i=1;i<t;i++)
if(a%i==0 && b%i==0)
gcd=i;


console.log(gcd);
