let n=5;
let k=0;

let i;
let j;
for(i=1;i<=n;i++)
{
    for(j=1;j<=k-i;j++)
    process.stdout.write(" ");

    while(k!=2*i-1)
    {
        console.log(i);
        k++
    }
}