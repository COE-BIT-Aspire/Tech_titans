function Header() {
    const mystyle = {
        color: 'red',
        background: 'green',
        marginRight:'100px'
    }
    return (
        <>
            {/* <h1 style={{color:'green',background:'red'}}>Styling this tag</h1> */}
            <h1 style={mystyle}>Styling this line </h1>
            <p>For learning inline CSS</p>
        </>
    );
}

export default Header;