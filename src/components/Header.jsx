const Header = ({ onChange }) => {
    return (
        <div className='d-flex justify-content-between bg-black '>
            <h2 className='bg-black text-white px-3  mt-1 pt-1 pb-1 mb-2 '>Buscador de Colaboradores</h2>
            <input
                className=' mt-3 mx-3 mb-3 text-gray-700 rounded '
                type="text"
                placeholder='Busca un Colaborador'
                onChange={onChange}
                />
        </div>
    );
};

export default Header;