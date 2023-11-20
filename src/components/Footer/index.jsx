import './styles.css'

export function Footer () {
  return (
    <>
      <footer className='flex bg-slate-600 text-neutral-50 p-5'>
        <ul className='flex flex-col gap-2'>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </footer>
    </>
  )
}