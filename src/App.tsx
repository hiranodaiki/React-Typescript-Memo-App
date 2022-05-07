import React from "react";
import {useState, FC, ChangeEvent} from "react";
import MemoList from "./components/MemoList";
import { useCallback } from "react";


const App:FC = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  // inputに文字を入力したら実行される関数
  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };

  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = useCallback((index:number) => {
    const newMemos = [...memos];
    newMemos.splice(index,1);
    setMemos(newMemos);
  }, [memos]);

  return (
    <div>
      <h1>Memo アプリ</h1>
      <input type="text" value={text} onChange={onChangeText} placeholder="メモを入力" />
      <button onClick={onClickAdd}>追加</button>
      <p>メモ一覧</p>
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>
  )
}

export default App;