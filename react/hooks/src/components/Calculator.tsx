import styled from "styled-components";

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
    }
  }
`;

export const Calculator = () => {
  return (
    <StyledDiv>
      <div id="display">
        <div id="display-content"></div>
        <div id="display-tips">
          <div id="tips-first-row">
            <span>+</span>
          </div>
          <div id="tips-second-row">
            <span>x</span>
            <span>/</span>
          </div>
          <div id="tips-third-row">
            <span>-</span>
          </div>
          <div id="tips-fourth-row">
            <span>Ecuals</span>
            <span>Clear</span>
          </div>
        </div>
      </div>

      <div id="keyboard">
        <div id="keyboard-first-row">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div id="keyboard-second-row">
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
        <div id="keyboard-third-row">
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div id="keyboard-fourth-row">
          <span>0</span>
        </div>
      </div>
    </StyledDiv>
  );
};
