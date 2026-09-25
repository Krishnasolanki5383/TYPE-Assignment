class Bank
{
  static totalbankBalance:number=0;

  id:number;
  name:string;
  amount:number;

  constructor(id:number,name:string,amount:number)
  {
    this.id=id;
    this.name=name;
    this.amount=amount;
    Bank.totalbankBalance+=amount;
  };
   debit(am:number):void{
    if (am > this.amount) {
    console.log("Insufficient Balance");
    return;
}
    this.amount-=am;
    Bank.totalbankBalance-=am;
    
    console.log(`your account debit: ${am} amount`)
  }

   credit(am:number):void{
    this.amount+=am;
    Bank.totalbankBalance+=am;
     console.log(`your account credit: ${am} amount`)
  }

  accountInfo():void{
 console.log(`
Account ID : ${this.id}
Name : ${this.name}
Balance : ₹${this.amount}
`);
  }

}

const u1=new Bank(21,"krishna",21210);
const u2=new Bank(212,"chotu",1000);
const u3=new Bank(27,"jal",50010);
u1.accountInfo()

console.log(`totla amount in bank is ${Bank.totalbankBalance}`);

u1.credit(3000)
console.log(`totla amount in bank is ${Bank.totalbankBalance}`);


