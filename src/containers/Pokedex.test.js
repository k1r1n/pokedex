import Pokedex from "./Pokedex";
import { shallow } from "enzyme";

jest.mock("axios");

describe("<My Pokedex />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Pokedex />);
  });

  it("When render my pokedex empty card", () => {});

  it("When click open modal", () => {});

  it("When get pokemon list", () => {});

  it("When search pokemon by name", () => {});

  it("When search pokemon by type", () => {});

  it("When select card in modal", () => {});

  it("When close modal on backdrop", () => {});

  it("When render my pokedex is not empty card", () => {});

  it("When unselect card in my pokedex", () => {});
});
