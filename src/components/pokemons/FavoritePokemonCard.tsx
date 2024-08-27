import type { FavoritePokemonsInterface } from "@interfaces/favorite-pokemons-interface";
import { createSignal, Show } from "solid-js";
import type { Component } from "solid-js/types/server/rendering.js";

interface Props {
    pokemon: FavoritePokemonsInterface;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {

    const [isVisible, setIsVisible] = createSignal(true);
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem('favoritePokemons') ?? "[]"
        ) as FavoritePokemonsInterface[];
        const newFavorites = favorites.filter(poke => poke.id !== pokemon.id);

        localStorage.setItem('favoritePokemons', JSON.stringify(newFavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>

            <div class="flex flex-col justify-center items-center gap-4 mt-4">
                <a href={`/pokemons/${pokemon.name}`} class="flex  flex-col justify-center items-center">
                    <img src={pokemonImg} alt={`Imagen de ${pokemon.name}`} style={`view-transition-name: ${pokemon.name}-image`} />
                    <h1 class="capitalize">{pokemon.name} - #{pokemon.id}</h1>
                </a>
                <button onClick={deleteFavorite} class="text-red-400 font-bold">Borrar</button>
            </div>
        </Show>
    );
}