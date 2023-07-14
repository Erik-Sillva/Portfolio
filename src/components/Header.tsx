const Header = () => {
    return (
        <header className='py-8'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center relative'>
                    {/* Logo */}
                    <div id='logo'>
                        <a href="/" className='font-tertiary'>
                            ES - DEV
                        </a>
                    </div>

                    {/* Button */}
                    <a href='#contact' className='btn btn-sm px-[.8rem] md:px-6 flex justify-center items-center'>Trabalhe Comigo</a>
                </div>
            </div>
        </header>
    )
}

export default Header