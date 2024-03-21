class Finance {
  constructor() {
    if (Finance.instance) {
      return Finance.instance;
    }
    this.users = [
      {
        id: 1,
        fullName: {
          firstName: "Ben",
          surname: "Aflek",
        },
        balance: 100,
        position: 4,
      },
      {
        id: 2,
        fullName: {
          firstName: "Nicolas",
          surname: "Holden",
        },
        balance: 200,
        position: 3,
      },
      {
        id: 3,
        fullName: {
          firstName: "Lenni",
          surname: "Kravec",
        },
        balance: 300,
        position: 2,
      },
      {
        id: 4,
        fullName: {
          firstName: "Ann",
          surname: "Smith",
        },
        balance: 400,
        position: 1,
      },
      {
        id: 5,
        fullName: {
          firstName: "Rosse",
          surname: "Lisbon",
        },
        balance: 0,
        position: 5,
      },
    ];
    Finance.instance = this;

    // console.log(this.users);
  }
  toString() {
    const usersInfo = JSON.parse(JSON.stringify(this.users));
    return usersInfo;
  }

  copy() {
    // const newFinance = new Finance();
    // newFinance.users = JSON.parse(JSON.stringify(this.users));
    // // console.log(newFinance.users);
    // return newFinance;
    return new Finance(this.users)
  }

  findUser(id) {
    const foundUser = this.users.find((user) => user.id === id);
    if (foundUser) {
      return foundUser;
    }
    throw new Error("Человек не нашёлся");
  }

  changeBalance(userId, money) {
    const foundUser = this.findUser(userId);
    foundUser.balance += money;
    this.updatePositions();
    // console.log(foundUser);
  }

  updatePositions() {
    this.users.sort((a, b) => b.balance - a.balance);
    this.users.forEach((user, index) => {
      user.position = index + 1;
    });
  }
}

class FinanceFasade {
  constructor(FinanceInstance) {
    this.FinanceInstance = FinanceInstance;
  }
  change(userId, money) {
    this.FinanceInstance.changeBalance(userId, money);
  }
  copyFinance() {
    return this.FinanceInstance.copy();
  }
  toStringFinance() {
    return this.FinanceInstance.toString();
  }
}
const FinanceBase = new FinanceFasade(new Finance());
const FinanceInterface = new FinanceFasade(new Finance());

const newFinanceInstance = FinanceInterface.copyFinance();

console.log("Вывожу новый класс", newFinanceInstance.toString());
console.log("Вывожу основной класс:", FinanceBase.toStringFinance());
console.log(FinanceBase === newFinanceInstance);

FinanceInterface.change(2, 4000);

console.log("Вывожу новый класс", newFinanceInstance.toString());
console.log("Вывожу основной класс:", FinanceBase.toStringFinance());
console.log(FinanceBase.toStringFinance() === newFinanceInstance.toString());
