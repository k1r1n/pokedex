import axios from "axios";
import { xorBy } from "lodash";
import { useEffect, useState } from "react";
import { ENDPOINT_CARDS_URL } from "../constants";
import { ContainerStyle, ListStyle } from "./Pokedex.styled";
import { Card, SearchInput, Modal, Button } from "../components";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getCard(search);
  }, [search, pokedex]);

  const getCard = async (value) => {
    const response =
      (await axios(`${ENDPOINT_CARDS_URL}name=${value}&type=${value}`)) || {};

    const prepareData = response.data?.data.map((item) => {
      const hp = (item.hp > 100 && 100) || parseInt(item.hp) || 0;
      const damage =
        item.attacks
          ?.map((item) => parseInt(item.damage) || 0)
          .reduce((a, b) => a + b) || 0;

      const weaknesses =
        (item.weaknesses?.length * 100 > 100 && 100) ||
        item.weaknesses?.length * 100 ||
        0;

      return {
        ...item,
        hp,
        strange:
          (item.attacks?.length * 50 > 100 && 100) ||
          item.attacks?.length * 50 ||
          0,
        weaknesses,
        damage,
        happiness: Math.round(
          (hp / 10 + damage / 10 + 10 - weaknesses / 100) / 5
        ),
      };
    });

    setPokemons(xorBy(prepareData, pokedex, "id"));
  };

  const onChange = (event) => {
    setSearch(event.target.value.trim());
  };

  const onClick = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onSelectCard = (item) => {
    setPokedex((prevState) => [...prevState, item]);
  };

  const onUnSelectCard = (item) => {
    setPokedex((prevState) => [
      ...prevState.filter((_item) => _item.id !== item.id),
    ]);
    setPokemons((prevState) => [...prevState, item]);
  };

  return (
    <ContainerStyle data-testid="container">
      <h1 data-testid="title">My Pokédex</h1>
      <label data-testid="found-pokedex">
        Found {pokedex.length} item{pokedex.length > 0 && "s"}
      </label>
      <ListStyle id="mypokedex-list">
        {pokedex.map((item) => (
          <Card
            id={`card-pokedex-${item.id}`}
            onClick={() => onUnSelectCard(item)}
            key={item.id}
            item={item}
          />
        ))}
      </ListStyle>

      <Button id="add-pokedex" onClick={onClick} />
      {isOpen && (
        <Modal id="modal" onClose={onClose}>
          <SearchInput id="search-input" onChange={onChange} />
          <label data-testid="found-pokemon">
            Found {pokemons.length} item{pokemons.length > 0 && "s"}
          </label>
          <ListStyle className="scroll">
            {pokemons.map((item) => (
              <Card
                id={`card-pokemon-${item.id}`}
                onClick={() => onSelectCard(item)}
                key={item.id}
                item={item}
              />
            ))}
          </ListStyle>
        </Modal>
      )}
    </ContainerStyle>
  );
}

export default Pokedex;
