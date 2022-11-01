import { MouseEvent, useState, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import Child from './Child';
import { IUserInfo } from '../type/TypeDefinition';

const Parents = () => {
  const [click, setClick] = useState<boolean>(false);
  const [content, setContent] = useState<string>();
  const inputRef = useRef<any>();

  const onClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setClick(!click);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    inputRef.current.value = '';
    setContent('');
  };

  const Info: IUserInfo = {
    name: '홍길동',
    age: 24,
    stack: ['react', 'spring'],
    position: 'front',
  };

  return (
    <Wrap>
      <Container>
        <div className="title"></div>
        <Child info={Info} onClickBtn={onClickBtn} click={click} />
      </Container>
      <input type="text" onChange={onChange} onClick={onClick} ref={inputRef} />
      {content}
    </Wrap>
  );
};

export default Parents;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    margin-top: 10px;
  }
`;

const Container = styled.div`
  width: 360px;
  height: 500px;
  background-color: #e2445c;
  color: #fff;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 20px;
    font-weight: 700;
  }
`;
