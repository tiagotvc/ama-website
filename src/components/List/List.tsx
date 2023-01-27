import React from "react";
import { ListProps } from "utils/props";
import { ItemsList } from "utils/types";
import { Container } from "./List.styles";
import { ListItem } from "./ListItem/ListItem";

export const List: React.FC<ListProps> = ({ listItens }) => {
  return (
    <Container>
      <ul>
        {listItens.map((item: ItemsList) => (
          <ListItem currentItem={item} key={item.name} />
        ))}
      </ul>
    </Container>
  );
};
