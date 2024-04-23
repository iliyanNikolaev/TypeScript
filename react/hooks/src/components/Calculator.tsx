import { useState } from "react";
import styled from "styled-components";

enum KeyNum {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Zero = "0",
}

enum MathAction {
  Collect,
  Subtract,
  Multiply,
  Divide,
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  font-size: larger;
  font-weight: bold;
  max-height: 90vh;
  #display {
    width: 40%;
    border: 2px solid;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    #display-content {
      width: 80%;
      min-height: 4rem;
      border: 2px solid;
    }
    #display-tips {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    #tips-first-row span,
    #tips-second-row span,
    #tips-third-row span,
    #tips-fourth-row span {
      padding: 0.4rem;
      border: 0.5px solid;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
      }
    }
    #tips-second-row,
    #tips-fourth-row {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
  #keyboard {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    #keyboard-first-row,
    #keyboard-second-row,
    #keyboard-third-row {
      display: flex;
      gap: 5rem;
    }
    #keyboard-first-row span,
    #keyboard-second-row span,
    #keyboard-third-row span,
    #keyboard-fourth-row span {
      padding: 0.5rem;
      border: 1px solid;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Calculator = () => {
  const [savedNum, setSavedNum] = useState<number>();
  const [currentAction, setCurrentAction] = useState<MathAction>();
  const [displayValue, setDisplayValue] = useState<string>('');

  const onClearClick = () => {
    setSavedNum(undefined);
    setCurrentAction(undefined);
    setDisplayValue('');
  };

  const onEqClick = () => {
    if(displayValue && savedNum){
      switch (currentAction) {
        case MathAction.Collect:
            setDisplayValue(state => (Number(state) + savedNum).toString());
          break;
        case MathAction.Multiply:
          setDisplayValue(state => (Number(state) * savedNum).toString());
          break;
        case MathAction.Divide:
          setDisplayValue(state => (savedNum / Number(state)).toString());
          break;
        case MathAction.Subtract:
          setDisplayValue(state => (savedNum - Number(state)).toString());
          break;
        default: ;
      }

      setSavedNum(Number(displayValue));
      setCurrentAction(undefined);
    }
  };

  const onMathActionClick = (action: MathAction): void => {
    setSavedNum(Number(displayValue));
    setCurrentAction(action);
    setDisplayValue("");
  };

  const onNumClick = (num: KeyNum): void => {
    setDisplayValue((state) => (state += num));
  };

  return (
    <StyledDiv>
      <div id="display">
        <div id="display-content">{displayValue}</div>
        <div id="display-tips">
          <div id="tips-first-row">
            <span onClick={() => onMathActionClick(MathAction.Collect)}>+</span>
          </div>
          <div id="tips-second-row">
            <span onClick={() => onMathActionClick(MathAction.Multiply)}>
              x
            </span>
            <span onClick={() => onMathActionClick(MathAction.Divide)}>/</span>
          </div>
          <div id="tips-third-row">
            <span onClick={() => onMathActionClick(MathAction.Subtract)}>
              -
            </span>
          </div>
          <div id="tips-fourth-row">
            <span onClick={onEqClick}>Ecuals</span>
            <span onClick={onClearClick}>Clear</span>
          </div>
        </div>
      </div>

      <div id="keyboard">
        <div id="keyboard-first-row">
          <span onClick={() => onNumClick(KeyNum.One)}>1</span>
          <span onClick={() => onNumClick(KeyNum.Two)}>2</span>
          <span onClick={() => onNumClick(KeyNum.Three)}>3</span>
        </div>
        <div id="keyboard-second-row">
          <span onClick={() => onNumClick(KeyNum.Four)}>4</span>
          <span onClick={() => onNumClick(KeyNum.Five)}>5</span>
          <span onClick={() => onNumClick(KeyNum.Six)}>6</span>
        </div>
        <div id="keyboard-third-row">
          <span onClick={() => onNumClick(KeyNum.Seven)}>7</span>
          <span onClick={() => onNumClick(KeyNum.Eight)}>8</span>
          <span onClick={() => onNumClick(KeyNum.Nine)}>9</span>
        </div>
        <div id="keyboard-fourth-row">
          <span onClick={() => onNumClick(KeyNum.Zero)}>0</span>
        </div>
      </div>
    </StyledDiv>
  );
};
