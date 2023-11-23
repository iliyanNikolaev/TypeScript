type ConvCorner = (input: string[]) => void;

const cornerConvertor: ConvCorner = (input) => {
    const radians = Number(input[0]);
    const degrees = radians * 180 / Math.PI;
    console.log(degrees);
}