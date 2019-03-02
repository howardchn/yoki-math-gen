let ops = [ '+', '-', '-' ];

function genLv1() {
    let qs = []
    for (let i = 0; i < 8; i ++) {
        let q = randomQPositive(2);
    
        qs.push( [q.expr, '=', '*'].join(' '));//q.v);
    }

    return qs;
}

function randomLess10() {
    return Math.floor(Math.random() * 9 + 1);
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

    let base = v = randomNumber(params.min, params.max);
    let expr = base.toString();
    
    while(count > 0) {
        let tempExpr = undefined;;
        while((v = eval((tempExpr = expr + randomNext(undefined, params.max)))) < 0) { }

        expr = tempExpr;
        count--;
    }

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
function randomPlusMinusExamLv1() {
    let q = randomQPositive(2);
    return { expr: q.expr, v: q.v };
}

// random plus minus exam
function randomPlusMinusExamLv2() {
    let q = randomQPositive(2, { max: 1000, min: 500 });
    return { expr: q.expr, v: q.v };
}

// random compare exam lv1
function randomPlusMinusCompareExamLv1() {
    let q1 = randomQPositive(2);
    let q2 = randomQPositive(2);
    let v = undefined;
    if (q1.v < q2.v) v = '<';
    else if (q1.v > q2.v) v = '>';
    else v = '=';

    return { expr1: q1.expr, expr2: q2.expr, v: v };
}