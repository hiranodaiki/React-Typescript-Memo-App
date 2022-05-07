import React from 'react'
import MemoList from './components/MemoList ';
import {useState,FC, ChangeEvent} from 'react';
import useMemoList from './hooks/useMemoList';
import { useCallback } from 'react';

const App:FC = () => {
  const {memos, addTodo, deleteTodo} = useMemoList();

  const [text, setText] = useState<string>("");
  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };
  const onClickDelete = useCallback((index:number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>
      <h1>メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} placeholder="メモを入力" />
      <button onClick={onClickAdd}>追加</button>
      <p>メモ一覧</p>
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>

  )
}
export default App;