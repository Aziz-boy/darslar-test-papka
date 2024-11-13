
class Account {
    #amount = 0;
    #account_id;
  
    constructor(name, amount, account_id) {
      this.name  = name
      this.#amount = amount;
      this.#account_id = account_id;
    }
  
    tellMeBalance () {
      console.log( `sizning hisobingizdagi qoldiq ${this.#amount}$`);
      return this.#amount;
    
    }
  
    withdrawMoney (amount) {
      if (this.#amount > amount) {
        this.#amount -= amount;
        console.log(`hisobdan ${amount}$ pul yechildi va qoldiq ${this.amount}$`)
      }else {
        console.log('Insufficient balance')
    
     }
   }
  
  depositMoney (amount) {
    this.#amount += amount;
    console.log(`hisobingiz ${amount}ga toldirildi. hisobizngiz ${this.amount}$ni tashkil qiladi`)
  }
  
  
   giveMeDetails () {
    console.log(`Assalomu aleykum \nIsmingiz: ${this.name}, \nHisob ID: ${this.#account_id}, \nQoldiq: ${this.tellMeBalance()}$`)

   }

   static tellMeAboutClass () {
    console.log(`Bu class accountlarni yasash uchun xizmat qiladi`)
   }
   
   static tellMeTime () {
    const moment = require('moment');
    console.log(`Hozirgi vaqt: ${moment().format('YYYY MM DD, h:mm:ss')}`)
   }

  }

  module.exports = Account;