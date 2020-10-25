module.exports = function check(str, bracketsConfig) {
    var i,
        l=str.length,
        k,
        char,
        last,
        stack=[];

    for(i=0; i<l; i++){
        char=str[i];
        for(k = 0; k < bracketsConfig.length; k++){
            if(char===bracketsConfig[k][0]){
                stack.push(char);
            }else if(char===bracketsConfig[k][1]){
                if(stack.length>0){
                    last=stack[stack.length-1];
                    if ((char === bracketsConfig[k][1] && last === bracketsConfig[k][0])) {
                        stack.pop();
                    }
                }
            }
        }

    }
    return stack.length===0;

};
