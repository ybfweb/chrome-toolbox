import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer';

interface ItemInfo {
  title: string;
  children?: ItemInfo[];
  url?: string;
  id?: string | number;
  show?: boolean | undefined;
}

interface PropsType {
  list: ItemInfo[];
  show?: boolean;
}

const ListBox = styled.ul`
  line-height: 28px;
  color: #333;
`;

const Link = styled.a`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`;

const ListTilte = styled.div`
  background-color: #f1f1f1;
  padding: 0 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;
export default function ListItem({ list }: PropsType) {
  const [visible, setVisible] = useState(false);
  const [myList, updateMyList] = useImmer<ItemInfo[]>([]);

  const openTab = (url?: string) => {
    // @ts-ignore
    window.chrome.tabs.create({ url, active: false });
  }
  const changeShow = (index: number) => {
    console.log(list[index]);

    updateMyList((list) => {
      list[index].show = !list[index].show;
    });
  };
  useEffect(() => {
    updateMyList(list);
  }, [list]);
  if (myList.length) {
    return (
      <ListBox>
        {myList.map((item, index) => {
          if (item.children?.length) {
            return (
              <li key={item.id}>
                <ListTilte onClick={() => changeShow(index)}>
                  {item.title}
                </ListTilte>
                {item.show ?  <ListItem list={item.children}></ListItem> : ''}
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <Link target="__blank" onClick={() => openTab(item.url)}>
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ListBox>
    );
  }

  return <ul></ul>;
}
