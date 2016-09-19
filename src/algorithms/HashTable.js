export default class HashTable{
    constructor(hashAlg){
        this.hashAlg = hashAlg || 'simple';
        this.hashFactor = 103;   //should be a primative number
        this.table = [];
    }
    put(key){
        var hashCode = this.hash(key);
        if(this.table[hashCode] === undefined){
            this.table[hashCode] = [key];
        }
        else {
            this.table[hashCode].push(key);
        }
    }
    get(key){
        var hashcode;
        try {
            hashcode = this.hash(key);
            var i = 0;
            while(this.table[hashcode][i] !== key){
                i++;
            }
            return this.table[hashcode][i];
        }
        catch(e){
            console.error(e);
        }
        return null;
    }
    hash(key){
        if(!this.isKeyValid(key)){
            throw(`invalid key ${key}`);
        }

        if(typeof key === 'string'){
            return this.stringHash(key);
        }
        else if(typeof key === 'number'){
            return this.intHash(key);
        }
        else {
            throw(`invalid key ${key}`);
        }

    }
    intHash(key){
        var temp = key % this.hashFactor;
        return temp >= 0 ? temp : temp + this.hashFactor;
    }
    stringHash(key){
        var code = key.split('').reduce((pre, cur) => {
            return pre + cur.charCodeAt(0);
        }, 0)
        return parseInt(code);
    }
    isKeyValid(key){
        if( (typeof key !== 'string' && typeof key !== 'number') ||
            key === '' ||
            key !== key){
            return false;
        }
        else {
            return true;
        }
    }
}
