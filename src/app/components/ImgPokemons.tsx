import Image from "next/image";

export async function ImgPokemons( {url} : {url: string} ) {
    
    const sprites = await fetch(url).then(resp => resp.json());
    // console.log(sprites.sprites.other['official-artwork'].front_default);
    
    return (
        <Image 
            src={sprites.sprites.front_default ? sprites.sprites.front_default : ''} alt="image from pokemon" 
            width={100}
            height={100}
        />
    )
}