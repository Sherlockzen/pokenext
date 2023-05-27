import { log } from "console";
import { resolve } from "path";
import Image from "next/image";
import { ImgPokemons } from "./ImgPokemons";

interface list {
    count: number,
    next: string | null,
    previous: string | null,
    results: resul[],
}

interface resul {
    name: string,
    url: string,
}

export async function ListPokemons({ page } : {page: number}) {
    console.log('Pagina: ', page)
    const pag : number = page;
    const limit = 20;
    const offset = pag * limit;
    console.log(offset);
    

    const pokemons: list = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
                            .then(resp => resp.json());
    
    const pageLimit: number = Math.floor(pokemons.count / limit);
    
    
    return (
      <>
        <div>{pokemons.count}</div>
        <div>{pageLimit}</div>
        <div className=" flex flex-wrap gap-10 mt-10">
          {pokemons.results.map((pokemon, id) => (
            <div>
              <div className=" uppercase">{pokemon.name}</div>
              <ImgPokemons url={pokemon.url} />
            </div>
          ))}
        </div>
        <div className=" flex">
          <button className={" border-2 p-2 bg-amber-300"}>
            <a href={`/?page=${pag - 1}`}>Anterior</a>
          </button>
          <button className={" border-2 p-2 bg-blue-300"}>
            <a href={`/?page=${pag + 1}`}>Proximo</a>
          </button>
        </div>
      </>
    );
}