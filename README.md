# typeofdata
get the type string javascript


# example
import {isNotEmpty,isArray,isArrayCount,isObject,isFunction,isBoolean,isObject, etc....} from @creatrix/typeofdata;

const var1=null;<br />
const var2=undefined; <br />
const var3="demo string";<br />
const var4=[];
const var5={id:1};
const var6=()=>{};

isNotEmpty(var1) //false
isNotEmpty(var2) //false
isNotEmpty(var3) //true
.....

isArray(var4) //true
isArrayCount(var4) //false
isArray(var1) //false
isArray(var2) //false
isArray(var3) //true
.....
