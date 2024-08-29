import { useState } from "react";
import { keyData } from "../keyData";
import Button from "./Button";

const Calculator = () => {
  const [enteredValue, setEnteredValue] = useState('0');

  const isLastCharOperator = (str) => /[+*/-]$/.test(str);

  const onNumCLick = (id, value) => {
    if (id === 'clear') {
      setEnteredValue('0');
    } else if (id === 'equals') {
      try {
        // eslint-disable-next-line no-eval
        const evalValue = eval(enteredValue);
        setEnteredValue(String(evalValue));
      } catch (error) {
        setEnteredValue('Error');
      }
    } else if (value === ('.')) {
      setEnteredValue((prevValue) => {
        const hasDecimal = prevValue.split(/[+\-*/]/).pop().includes('.');
        return hasDecimal ? prevValue : prevValue + value;
      });
    } else {
      setEnteredValue((prevValue) => {
        const isOperator = isLastCharOperator(prevValue);

        // Handle multiple consecutive operators
        if (isOperator) {
          if (value === '-') {
            // Allow negative sign after an operator
            return prevValue + value;
          } else if (/[*+/]/.test(value)) {
            // Remove all operators and add the new one
            const cleanedValue = prevValue.replace(/[+\-*/]+$/, ''); // Remove trailing operators
            return cleanedValue + value;
          }
        }

        if (prevValue === '0') {
          return prevValue.slice(1) + value;
        }

        if (prevValue === 'Error') {
          return value;
        }

        return prevValue + value;
      });
    }
  };

  return (
    <div className="m-2 font-mono">
      {/* <div className="p-3 text-right break-words">
        {prevOperand} {operator}
      </div> */}
      <input
        type="text"
        id="display"
        readOnly
        placeholder="0"
        className="w-full h-16 bg-gray-300 outline-none p-3 text-warmGray-900 text-right mb-1 text-2xl"
        value={enteredValue}
      />

      <table className="w-full">
        <tbody>
          {keyData.map((keyRow) => (
            <tr key={keyRow.id}>
              {keyRow.row.map((keyCol) => (
                <td
                  key={keyCol.id}
                  colSpan={keyCol.col ? keyCol.col : ""}
                  rowSpan={keyCol.row ? keyCol.row : ""}>
                  <Button
                    key={keyCol.keyId}
                    handleClick={onNumCLick}
                    value={keyCol.text}
                    bgColor={keyCol.btnClass}
                    id={keyCol.keyId}>
                    {keyCol.text}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
