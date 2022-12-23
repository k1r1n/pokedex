import {
  render,
  fireEvent,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Pokedex from "../Pokedex";
import axios from "axios";
import { mockPokemon } from "../Pokemon.mock";

jest.mock("axios");

describe("<My Pokedex />", () => {
  it("When render my pokedex empty card", async () => {
    await act(async () => render(<Pokedex />));

    expect(screen.getByTestId("found-pokedex")).toHaveTextContent(
      "Found 0 item"
    );
  });

  it("When click open modal", async () => {
    await act(async () => render(<Pokedex />));

    fireEvent.click(screen.getByTestId("add-pokedex"));
    expect(screen.getByTestId("modal")).toBeVisible();
  });

  it("When get pokemon list", async () => {
    jest.spyOn(axios, "default").mockResolvedValueOnce({
      data: {
        data: mockPokemon,
      },
    });

    await act(async () => render(<Pokedex />));

    fireEvent.click(screen.getByTestId("add-pokedex"));

    expect(screen.getByTestId("found-pokemon")).toHaveTextContent(
      "Found 5 items"
    );
  });

  it("When search pokemon by name", async () => {
    jest.spyOn(axios, "default").mockResolvedValueOnce({
      data: {
        data: mockPokemon,
      },
    });

    await act(async () => render(<Pokedex />));

    fireEvent.click(screen.getByTestId("add-pokedex"));
    expect(screen.getByTestId("modal")).toBeVisible();
    expect(screen.getByTestId("search-input")).toBeVisible();
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Deoxys" },
    });

    await waitFor(() => {
      expect(screen.getByTestId("search-input").value).toBe("Deoxys");
    });

    // expect(screen.getByText("Deoxys")).toHaveLength(1);
  });

  it("When search pokemon by type", async () => {
    await act(async () => render(<Pokedex />));

    fireEvent.click(screen.getByTestId("add-pokedex"));
    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeVisible();
      expect(screen.getByTestId("search-input")).toBeVisible();
    });
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "pokemon type" },
    });

    await waitFor(() => {
      expect(screen.getByTestId("search-input").value).toBe("pokemon type");
      expect(screen.getByTestId("found-pokemon")).toBeVisible();
    });
  });

  it("When select card in modal", async () => {});

  it("When close modal on backdrop", async () => {
    await act(async () => render(<Pokedex />));

    fireEvent.click(screen.getByTestId("add-pokedex"));
    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeVisible();
    });

    fireEvent.click(screen.getByTestId("modal-backdrop"));
    expect(screen.getByTestId("title")).toBeVisible();
  });

  it("When render my pokedex is not empty card", async () => {
    jest.spyOn(axios, "default").mockResolvedValueOnce({
      data: {
        data: mockPokemon,
      },
    });

    await act(async () => render(<Pokedex />));

    fireEvent.click(screen.getByTestId("add-pokedex"));
    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeVisible();
    });
    // fireEvent.click(screen.getByTestId("modal-backdrop"));

    await waitFor(() => {
      // expect(screen.getByTestId("modal")).toMatchSnapshot();
    });
  });

  it("When unselect card in my pokedex", () => {});
});
