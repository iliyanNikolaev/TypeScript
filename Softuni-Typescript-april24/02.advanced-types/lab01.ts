const input: string[] = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

type Output = { [key: string]: number };

function constrCalorieObj(arr: string[]) {

    let output: Output = {};
    
    for(let i = 0; i <= arr.length - 1; i+=2) {
        const key = arr[i];
        const cal = Number(arr[i+1]);
        if(Number.isNaN(cal)){
            throw new Error('invalid input');
        }
        output[key] = cal;
    }
    return output;
}

console.log(constrCalorieObj(input));