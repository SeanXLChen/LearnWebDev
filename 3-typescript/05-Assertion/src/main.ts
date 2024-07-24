type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

// 这个格式React里面用不了
let d = <One>'world' 
let e = <string | number>'world' 

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b;
    }
    return a.toString() + b.toString();
}

let myVal: string = addOrConcat(1, 2, 'concat') // not OK
let myVal2: string = addOrConcat(1, 2, 'concat') as string // OK

// Be carefule! TS sees no problem - but a string is returned
let myVal3: string = addOrConcat(1, 2, 'concat') as number


10 as string // Error: can't assign number to string
(10 as unkown) as string // Error: can't assign unkown to string



// The DOM
const img = document.querySelector('img') as HTMLImageElement
img.src // OK

const myImg = document.getElementById('myImgId') 
myImg.src // Error: Property 'src' does not exist on type 'HTMLElement'

const myImg2 = document.getElementById('myImgId') as HTMLImageElement
myImg2.src // OK