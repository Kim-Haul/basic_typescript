import React from 'react';
import styled from 'styled-components';
import { Iprops, IUserInfo } from '../type/TypeDefinition';

const Child = (props: Iprops) => {
  return (
    <Wrap>
      <button onClick={props.onClickBtn}>버튼</button>
      <div>{props.click ? '딸깍' : '딸깍딸깍'}</div>
    </Wrap>
  );
};

export default Child;

const Wrap = styled.div`
  width: 90%;
  height: 20%;
  background-color: #00c7ae;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    outline: none;
    border: 1px solid black;
    background-color: #007bff;
    color: #fff;
    padding: 5px;

    margin-bottom: 5px;
  }
`;
