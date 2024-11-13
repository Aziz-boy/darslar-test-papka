let hisob = {};

hisob.kopaytirish = (a,b) => {
    return a * b;
}

hisob.bolish = (a,b) => {
    return a / b;
}

hisob.qoshish = (a,b) => {
    return a + b;
}

hisob.ayirish = (a,b) => {
    return a - b;
}


module.exports = hisob; //module export bilan biz yaratgan shu modulimizni export qilyapmiz va kerakli joyda require bilan chaqirib olyapmiz 

