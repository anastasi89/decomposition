import React from "react";
import { List, Item } from "../List";

/**
 * Категории поика" - выбор категории для поиска
 */

export default function CategorySearch() {
  const categoryNews = [
    { nameCategory: "Картинки", href: "#", className: "category-search-item" },
    { nameCategory: "Видео", href: "#", className: "category-search-item" },
    { nameCategory: "Новости", href: "#", className: "category-search-item" },
  ];
  return (
    <ul className='list-category-search'>
      <List items={categoryNews}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.nameCategory} className={item.className}>
                <a href={item.href}>
                  <span>{item.nameCategory}</span>
                </a>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}
