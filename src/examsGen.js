let ops = [ '+', '-', '-' ];

function randomLess10(max = 10, min = 2) {
    let number = Math.floor(Math.random() * max) || 1;
    while (number < min) {
        number = randomLess10(max, min)
    }
    return number
}

function genLv2(count = 20) {
    let qs = []
    for (let i = 0; i < count; i ++) {
        let n1 = randomLess10();
        let n2 = randomLess10();
        let expr = `${n1} * ${n2} = *`; 
        qs.push(expr);
    }

    return qs;
}

function randomMultipleLv1() {
    let n1 = randomLess10();
    let n2 = randomLess10();
    let expr = `${n1} * ${n2} = `; 
    let v = n1 * n2;
    return { expr, v };
}

function randomDivideLv1() {
    let n1 = randomLess10();
    let n2 = randomLess10();
    let v = n1 * n2;
    let expr = `${v} ÷ ${n1} = `; 
    return { expr, v: n2 };
}

function randomDivideWithModLv1() {
    let n1 = randomLess10(10, 2);
    let n2 = randomLess10();
    let mod = randomLess10(n1, 1);
    let v = n1 * n2 + mod;
    let expr = `${v} ÷ ${n1} = `; 
    return { expr, v: n2, mod, requireMod: true };
}

function randomMixedMultiAndDivideLv1() {
    let n = randomNumber() % 2
    switch(n) {
        case 1: return randomMultipleLv1()
        case 0: return randomDivideLv1()
    }
    
    if (n === 0) {
        return randomMultipleLv1()
    }
}

function sanitizeParams(params) {
    params = params || {}
    params.max = params.max || 100
    params.min = params.min || 67
    return params
}

function randomQPositive(count, params) {
    params = sanitizeParams(params);

    let base, v 
    base = v = randomNumber(params.min, params.max);
    let expr = base.toString();
    
    while(count > 0) {
        let tempExpr = undefined;;
        while((v = eval((tempExpr = expr + randomNext(undefined, params.max)))) < 0) { }

        expr = tempExpr;
        count--;
    }

    expr += ' ='

    return { expr, v };
}

function randomNext(min = 10, max = 100) {
    let c = randomNumber(min, max);
    let op1 = ops[Math.round(Math.random() * (ops.length - 1))];
    return ` ${op1} ${c}`;
}

function randomNumber(min, max = 100) {
    let c = parseInt(Math.random() * max);

    if (min !== undefined) {
        while (c < min) {
            c = parseInt(Math.random() * max);
        }
    }

    return c;
}

// random plus minus exam
function randomPlusMinusExamLv2() {
    let q = randomQPositive(2, { max: 1000, min: 500 });
    return { expr: q.expr, v: q.v };
}

function shuffle(items) {
    items = items.sort((a,b) => {
      return Math.random() * 2 - 1
    })

    return items
}

function randomMix() {
    let gens = [
        randomPlusMinusExamLv2,
        randomDivideWithModLv1,
        randomDivideLv1,
        randomMultipleLv1
    ]

    let options = '001111122233'.split('')
    options = shuffle(options)

    // let randomIndex = randomNumber(0, gens.length)
    let randomIndex = options[randomNumber(0, options.length)]
    return gens[randomIndex]()
}

export {
    randomMultipleLv1,
    randomPlusMinusExamLv2,
    randomDivideLv1,
    randomMixedMultiAndDivideLv1,
    randomDivideWithModLv1,
    randomMix
}