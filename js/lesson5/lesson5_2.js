function func1(){
    const names=["Alice", "Bob", "Tif", "Bruse", "Alice"];
    const obj=names.reduce((prev, cur)=>{
            if(!prev[cur])
                prev[cur]=0;
            prev[cur]++;
            return prev;
    },{});
    return obj;
}
console.log(func1());
function func2(){
    const letters=['a', 'b', 'a', 'b', 'c', 'e','e','c','d','d','d','d'];
    const arr=letters.reduce((prev, cur)=>{
        if(!prev.includes(cur))
            prev.push(cur);
        return prev;
    },[])
    return arr;
}
console.log(func2());
function func3() {
    const numbers=[-5,25,-19,0,16,0];
    const arr=numbers.reduce((prev, cur)=>{
        if(cur>0)
            prev.push(Math.sqrt(cur));
        return prev;
    },[])
    return arr;
}
console.log(func3());