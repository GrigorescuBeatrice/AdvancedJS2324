class MathUtil{
    static sum(...numbers){
        let total=0;
        for(const number in numbers){
            total+= parseInt(number);

        }
        return total;
    }
}
const result=MathUtil.sum(1,1,1,1,1,1,1,1);
console.info(result);