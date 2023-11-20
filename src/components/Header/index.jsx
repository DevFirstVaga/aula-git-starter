import './style.css'

export function Header() {
  return (
    <>
      <header className='flex p-5 justify-center items-center shadow-md'>
        <ul className='flex gap-3'>
          <li>Sobre</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
      </header>
    </>
  )
}