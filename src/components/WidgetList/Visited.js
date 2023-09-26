import React from "react";
import { List, Item } from "../List";

/**
 * "Посещаемое"- вывод информации о наиболее используемых сервисах
 */

export default function Visited() {
  const categoryVisited = [
    {
      category: "Недвижимость",
      href: "#",
      description: "О Сталинка",
    },
    {
      category: "Маркет",
      href: "#",
      description: "Iphone",
    },
  ];
  return (
    <ul className='list-visited'>
      <List items={categoryVisited}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.category} className='item-visited'>
                <a href={item.href}>
                  <span>{item.category}</span>
                </a>
                <span className='description'> - {item.description}</span>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}