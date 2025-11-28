function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    CRMFy

                    <div className='flex gap-4'>
                        Clientes
                        Oportunidades
                        Equipe
                        Projeto
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar