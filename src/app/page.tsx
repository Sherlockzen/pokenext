import Image from 'next/image'
import { ListPokemons } from './components/ListPokemons'
import { log } from 'console'

export default function Home({ searchParams }) {
  let page = 0;
  if (searchParams.page) {
    page = +searchParams.page;
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=' text-5xl'>Lista de Pokemons</h1>
      <ListPokemons 
        page={page}
      />
      
    </main>
  )
}
