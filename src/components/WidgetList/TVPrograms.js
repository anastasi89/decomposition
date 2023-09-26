import React from "react";
import { List, Item } from "../List";

/**
 "Телепрограмма"- вывод информации о телепрограмме: время, название передачи, канал
 */

export default function TVPrograms() {
  const programs = [
    {
      time: "09:00",
      href: "#",
      name: "ТНТ.Best",
      tVChanel: "ТНТ",
    },
    {
      time: "10:00",
      href: "#",
      name: "Все на МАТЧ",
      tVChanel: "МАТЧ",
    },
  ];
  return (
    <ul className='list-tv-programs'>
      <List items={programs}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.name} className='item-tv-programs'>
                <span>
                  {`${item.time} ${item.name}`}
                  <a href={item.href}>{item.tVChanel}</a>
                </span>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}