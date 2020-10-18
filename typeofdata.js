export function isNumber (value) {
    return typeof Number(value) === 'number' && isFinite(Number(value));
}
export function isNumberPositive (value) {
    return isNumber(value)===true && value>0?true:false;
}
export function isString (value) {
    return (typeof value === 'string' || value instanceof String) && value!=='';
}

export function isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array;
}

export function isArrayCount (value) {
    return isArray(value) ===true && value.length>0?true:false
}

export function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

export function isObjectKey (value,key) {
    return isObject(value) ===true && value[key]!== undefined?true:false
}

export function isObjectKeyValue (value,key) {
    return isObjectKey(value,key)===true && isNotEmpty(value[key])===true?true:false
}

export function isObjectKeyInteger (value,key) {
    return isObjectKey(value,key)===true && isNumber(value[key])===true && value[key]>0?true:false
}

export function isObjectKeyBooleanTrue (value,key) {
    return isObjectKey(value,key)===true && isBoolean(value[key])===true && value[key]===true?true:false
}
export function isObjectKeyBooleanFalse (value,key) {
    return isObjectKey(value,key)===true && isBoolean(value[key])===true && value[key]===false?true:false
}

export function isNull (value) {
    return value === null;
}

export function isUndefined (value) {
    return typeof value === 'undefined';
}

export function isExist (value) {
    return value && isNull(value)!==true && isUndefined(value)!==true;
}

export function isNotEmpty (value) {
    return isExist(value)===true && value!=='';
}

export function isBoolean (value) {
    return typeof value === 'boolean';
}

export function isFunction (value) {
    return (typeof value === 'function' || Object.prototype.toString.call(value) === '[object Function]');
}