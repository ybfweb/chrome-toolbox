import { useEffect, useState } from 'react';
import ListItem from './ListItem';

interface bookmarkType {
  children?: bookmarkType[];
  title: string;
  [propName: string]: string | number | bookmarkType[] | undefined;
}

export default function List() {
  const [list, setList] = useState<bookmarkType[]>([]);
  useEffect(() => {
    console.log(99999);

    // @ts-ignore
    if (window.chrome?.bookmarks?.getTree) {
      // @ts-ignore
      window.chrome.bookmarks.getTree((bookmarkTree) => {
        const list = bookmarkTree[0].children[0].children || [];
        console.log(list);
        setList(list);
      });
    }
  }, []);
  return (<ListItem list={list} show={true}></ListItem>);
}
