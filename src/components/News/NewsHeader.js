import React from "react";
import { List, Item } from "../List";

/**
 * "Категории новостей"- выбор категории новостей
 */

export default function NewsHeader() {
  const categoryNews = [
    { category: "В мире", href: "#" },
    { category: "В России", href: "#" },
  ];
  return (
    <ul className='list-category-news'>
      <List items={categoryNews}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.category} className='category-news-item'>
                <a href={item.href}>
                  <span>{item.category}</span>
                </a>
              </Item>
            );
          })
        }
      </List>
      <li className='date'>Дата</li>
    </ul>
  );
}
