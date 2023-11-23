type ConvMoney = (input: string[]) => void;

const moneyConvertor: ConvMoney = (input) => {
    const usd = Number(input[0]);
    console.log(usd * 1.79549);
}

