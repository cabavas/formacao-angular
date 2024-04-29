export type PokemonData = {
    name: string;
    id: number;
    sprites: {
        front_default:string
    }
    type: {
        slot: number
        types: {
            name: string
            url:string
        }
    }[]
}