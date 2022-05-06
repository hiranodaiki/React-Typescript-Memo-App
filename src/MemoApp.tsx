import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import "./index.css";

const MemoApp = () => {
  const [text, setText] = useState<string>('');
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  }
  const onClickDelete = (index:number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }
  return (
    <div>
      <div className='text-4xl font-bold flex justify-center my-7'>Memo App</div>
      <div className='flex justify-center mb-7'>
      <input className='text-2xl border-solid border border-black rounded-lg' type="text" value={text} onChange={onChangeText} placeholder="メモを入力" />
      <button className='border-solid border border-black rounded-lg px-3' onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <ul>
          {memos.map((memo,index) => (
            <li key={memo}>
              <div className='flex justify-center'>
                <div>
                  <p className='text-2xl mr-9 border-solid border border-black rounded-lg px-4 '>{memo}</p>
                </div>
                <div>
                  <button className='text-2xl border-solid border border-black rounded-lg px-4' onClick={() => {
                    onClickDelete(index)
                  }}>削除</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default MemoApp;