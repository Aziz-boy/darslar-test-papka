// npm init --yes deb terminalga yozsak bu bizga default proyektimizni initialize qiladi 
// npm init deb shunday kiritsak hamma malumotni ozimiz kirgizamiz
// package json proggramamizni ishga tushirish shu programmamiz qanday librarylardan foydalangan bu proyektni malumotlari qayt etiladi. 


//MODULE PACKAGE CORE terminalga node+enter+tab+tab yozilsa core modulellarni korib olishimiz mumkin 

// Module package CORE //modullar qaysilari node js ni ozida ichida ustanovka qilinganini bilish uchun ikki marta tab ni terminalda bosasz
/*
setInterval(function () {
   console.log('ishga tushdi');
 }, 5000);

  let number = 0;
setInterval(function () {
   console.log('hisob,', number);
   number++;
 }, 1000);

 //core packagelarni ustanovka qilish shart emas lekin chaqirib olishimiz kerak const fs = require('fs');
 //file systemni ichida qator methodlar bor bularni bilish uchun documentationga qarab chiqsak bo'ladi 


const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);

console.log('*************************************************')

fs.writeFileSync('./input.txt', `${data} \n\t\t by ADAMBEK` )
const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log(new_data);
*/

// Module package EXTERNAL
/* 
EXTERNAL Modullar bular ustanovka qilinishi shart bo'lgan modullelar hisoblanadi.
npm install moment --save //yani node package manager {yani npm } manga moment external moduleni 
ustanovka qilib ber deyapmiz. folderni ichida node moduleda ustanovka qilib beradi.

const moment = require ('moment');
const byDefaultTime = moment().format(); // mana shu format qavsini ichiga hech nima qo'yilmasa by default chiqadi 
console.log(byDefaultTime);

const time = moment().format('YYYY-MM-DD'); // bu orqali biz faqat year month day chiqish tartibini belgilayapmiz
console.log(time);

//Core module integrated with External

const moment = require ('moment');
const isTime = moment().format("HH:mm:ss"); // soat minut sekundni define qilish



setInterval(()=> {
    console.log(`hozirgi vaqt ${isTime}`)
},5000);


// bu package yani inquirer user input bilan ishlash uchun
 const inquirer = require('inquirer');
 inquirer
  .prompt([{type: input, name: 'raqam', mesaage: "raqamni kiriting ?"}])
  .then((answer) => {
    
    console.log('man kiritgan raqam qiymati, answer.raqam');
  })
  .catch(err => console.log(err));


//VALIDATOR
const validator = require('validator');
const test = validator.isEmail('shavgoniaziz@gmail.com'); //=> true qaytaradi yoki false qaytaradi. bu emailmi yoki email emasmi shuni tekshirib beradi 
console.log(test)




const validator = require('validator');
const test = validator.isInt('100'); //=> true qaytaradi yoki false qaytaradi. bu aynan agar integer bo'lsa true qaytaradi
console.log('test:', test);



const validator = require('validator');
const test = validator.isIP('213.230.92.203'); //=> true qaytaradi yoki false qaytaradi. bu aynan agar IP addres bo'lsa true qaytaradi
console.log('test:', test);

//UUID TAkRORLANMAYDIGAN RANDOM STRING
const { v4: uuidv4 } = require('uuid');
const random = uuidv4();  // takrorlanmaydigan random string chiqarib beradi
console.log('takrorlanmaydigan radom string: ', random)

// biz aytgan manzilda reccursive usulda folder ochib beradi
const mkdirp = require('mkdirp')

nodeman bu xuddi codepenni auto saviga oxshaydi 
har kod yozgandan keyn run start demaymizku uni orniga
 nodeman ozgraish bolgandan keyn ozi run qiladi. 

 //CHALK ORQALI  BIZ TERMINALGA CHIQARADIGAN STRINGLARGA RANG BERIHSIMIZ MUMKIN
const { v4: uuidv4 } = require('uuid');
const random = uuidv4();  
console.log('takrorlanmaydigan radom string: ', random)

const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + chalk.yellow(random) + chalk.red('!'));
*/

// setInterval(function () {
//   console.log('ishga tushdi');
// }, 5000);





// Module package FILE

/*
const calculate = require('./hisob.js'); //buni aynan ./hisob.js qilib chaqirishimizni sababi biz aynan shu papakamizni qaysi file ichida ekanligini define qilyapmiz

const natija  = calculate.kopaytirish(80,20);
console.log(natija);


console.log ('***********************************');

const natija2 = calculate.bolish(80,20);
console.log(natija2);


console.log ('***********************************');

const natija3 = calculate.qoshish(80,20);
console.log(natija3);

console.log('********************************');

const natija4 = calculate.ayirish(80,20);
console.log(natija4);

*/

/* 

console.log(require("module").wrapper); //nodejs ning too'gridan tog'ri asosiy sintakslarini ko'ramiz bular wrapper: exports, require, module, __filename, __dirname,

console.log(arguments); biz uni ./ qilib berganimiz uchun ham birinchi bo'lib ./ malumotimizni argumentni ichidan izlaydi  
lekin biz uni "moment" deb oddiygina nomini yozib chaqirsak u shu argumentimizni ichidagi node_modulesdan qidiradi va agar node 
moduleni ichidan topolmasa argument ketma ketligida bitta tepaga chiqib desktopni ichidan izlaydi yani biz . nuqta qo'ysak yani 
bu mani proyektimini ichida yani folderimni ichida degan manoni anglatadi agar biz shu ./ ni qo'ymasak ketadi bir boshidan node 
modulesni desktopni qidirib chiqadi xuddi momentni qidirganday

birinchi shu proyektimizni local moduledan to global modullargacha 
npm install --save bu degani npmni mani projectimini yani shu fileimni ichida ustanovka qil degani 
npm install --global bu degani npmni mani projectimga globalniy ustanovka qil degani yani biz buni luboy vaqt shu dekstopimadgi luboy projectimga ishlata olaman.

*/

const Account = require ("./account") ;
Account.tellMeTime();
Account.tellMeAboutClass();

console.log('**************************');



const myAccount = new Account('Adam', 200000, 9876789876578 );
myAccount.giveMeDetails();

myAccount.depositMoney(1000000);
myAccount.tellMeBalance();

console.log('************************');
//buggati uchun 2,4 mln usd olyapmiz
myAccount.withdrawMoney(24000000);
myAccount.tellMeBalance();

console.log('************************');
