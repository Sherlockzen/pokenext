import Image from "next/image";

export async function ImgPokemons( {url} : {url: string} ) {
    
    const sprites = await fetch(url).then(resp => resp.json());

    return (
        <Image 
            src={sprites.sprites.other.dream_world.front_default} alt="image from pokemon" 
            width={100}
            height={100}
        />
    )
}