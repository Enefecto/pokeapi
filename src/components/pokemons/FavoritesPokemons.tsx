import type { FavoritePokemonsInterface } from "@interfaces/favorite-pokemons-interface";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemon = (): FavoritePokemonsInterface[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favoritePokemons') ?? "[]"
    );

    return favoritePokemons;
}


export const FavoritePokemons = () => {

    const [ pokemons, setPokemons] = createSignal(getLocalStoragePokemon());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon}/>}
            </For>
        </div>
    )
}