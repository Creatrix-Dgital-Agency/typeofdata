# typeofdata
get the type string javascript


# example
### import {isNotEmpty,isArray,isArrayCount,isObject,isFunction,isBoolean,isObject, etc....} from @creatrix/typeofdata;

const var1=null;<br />
const var2=undefined; <br />
const var3="demo string";<br />
const var4=[];<br />
const var5={id:1};<br />
const var6=()=>{};<br />
<br />
isNotEmpty(var1) //false<br />
isNotEmpty(var2) //false<br />
isNotEmpty(var3) //true<br />
.....<br />
<br />
isArray(var4) //true<br />
isArrayCount(var4) //false<br />
isArray(var1) //false<br />
isArray(var2) //false<br />
isArray(var3) //true<br />
.....
