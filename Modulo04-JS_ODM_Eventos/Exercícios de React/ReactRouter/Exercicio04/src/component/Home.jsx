const Home = ({ onLogout }) => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Seja bem-vindo</h1>
            <p style={{textAlign: "center"}}>Acesse suas informações</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )

}

export default Home;