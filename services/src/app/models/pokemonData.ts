export type PokemonData = {
    name: string;
    id: number;
    sprites: {
        front_default:string
    }
    types: {
        slot: number
        types: {
            name: string
            url:string
        }
    }[]
}