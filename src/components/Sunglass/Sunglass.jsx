// import add from '../../Utility/Calculate';
import { add, multiply, divideFirstNumberByTheSecondNumber as divide } from '../../Utility/Calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css'
const Sunglass = () => {
    const first = 32;
    const second = 12;
    const sum = add(first, second);

    const multi = multiply(first, second);
    const vag = divide(first, second);


    return (
        <div>
            <Watch></Watch>
            
        </div>
    );
};

export default Sunglass;