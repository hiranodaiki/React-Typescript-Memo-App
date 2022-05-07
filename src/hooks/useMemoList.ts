import { useCallback, useState } from "react";

// カスタムフック
const useMemoList = () => {
  // メモ一覧のStateを定義
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback((text:string) => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
  }, [memos]);

  const deleteTodo = useCallback((index:number) => {
    const newMemos = [...memos];
    // replace index番目を何もなくす
    newMemos.splice(index, 1);
    setMemos(newMemos);
  },[memos]);

  return {memos, addTodo, deleteTodo}

};
export default useMemoList;