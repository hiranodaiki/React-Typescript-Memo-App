import React, { FC } from "react";

type Props = {
  memos:string[];
  onClickDelete:(index:number) => void;
};

const MemoList:FC<Props> = (props) => {
  const {memos, onClickDelete} = props;
  return (
    <div>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <p>{memo}</p>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
};
export default MemoList;