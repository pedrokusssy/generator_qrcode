const Index = () => {
    return (
        <div>
            <h1>Bem-vindo gerador de codigo QR.</h1>
            <p>Para gerar o seu codigo QR, Introduza o seu link ou numero ou qualquer dado que deseja obter o codigo QR.</p>
            <form method="GET" action="/api">
                <label for="campo" />
                <input type="text" name="url" id="campo" placeholder="Escreva aqui." />
                <input type="submit" value="Gerar Codigo QR" />
            </form>
        </div>
    );
}

export default Index;