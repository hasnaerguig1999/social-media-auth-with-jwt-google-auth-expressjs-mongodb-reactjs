import NavBarComponent from '../NavBar/NavBar'
const Header = () => {
  return (
    <>
      <div className='py-4 flex justify-center align-middle rounded shadow-[0px_2px_5px_1px] shadow-[#ccc]'>
        <h2 className='text-5xl font-semibold text-cyan-500'>SnapSync</h2> 
      </div>
      <NavBarComponent />
    </>
  )
}

export default Header