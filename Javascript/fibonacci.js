// a fibonacci numbers object using proxy.
var fib = Object.create( Proxy.create({
    getPropertyDescriptor: function( name){
        var index = ~~name;
        if( index == name && index > 1){
            return {
                get: function(){
                    var val = this[ index-1] + this[ index-2];
                    Object.defineProperty( this, index, {
                        value: val,
                        enumerable: true,
                        writable: true,
                        configurable: true
                    });
                    return val;
                }
            };
        } else {
            return Object.getOwnPropertyDescriptor( Object.prototype, name);
        }
    },
    getOwnPropertyDescriptor: function( name){
        return this.getPropertyDescriptor( name);
    },
    getPropertyNames: function(){
        return [];
    },
    getOwnPropertyNames: function(){
        return [];
    },
    delete:function(){
        return false;
    },
    fix: function(){
        return;
    }
}), {
    0: {
        value: 0,
        enumerable: true,
        writable: true,
        configurable: true
    },
    1: {
        value: 1,
        enumerable: true,
        writable: true,
        configurable: true
    }
});
