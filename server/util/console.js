exports.debugFn = (string)=>{
    const key = Symbol(string)
    console.log(key);
    console.log(String(string))
    console.log(JSON.stringify(string))
    console.debug(`${string} : `, string)
}