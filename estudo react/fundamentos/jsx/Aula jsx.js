// Porque o JSX?
// o JSX "abraça" a situação que a Lógica e o Dado andam juntos.
// Então ao invés de ficarmos alterando arquivos separados, como
// ocorre no modelo MCV, o React permite adicionar a camada de view
// no componente, nessa comparação.
// Você não é obrigado a utilizar o JSX no react, mas isso é
// altamente aconselhável.

/* expressões

const App = () => {
  const name = "Davvi";

  return (
    <h1>Hello, {name}</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// ---

const App = () => {
  const user = { firstName: 'Davvi', lastName: 'Duarte' }

  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`
  }

  return (
    <h1>Hello {formatName(user)}</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

/* ---

const App = () => {
  const user = { firstName: 'Davvi', lastName: 'Duarte' }

  const formatName = (user) => {
    if (user) {
      return `${user.firstName} ${user.lastName}`
    }

    return `Stranger`
  }

  return (
    <h1>Hello {formatName()}</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// atributos/parâmetros

const Greeting = ({ firstName, lastName }) => {
  return <h1>Hello, {firstName} {lastName}!</h1>
}

const Menu = ({ firstName, lastName, isLoggedIn = false, onLogout }) => {
  return (
    <>
      <Greeting firstName={firstName} lastName={lastName} />
      <button onClick={onLogout}>Logout</button>
    </>
  )
}
/*/
/*
const App = () => {
  const logout = () => {
    console.log('logout no sistema...');
  }

  return <Menu firstName="Davvi" lastName="Duarte" onLogout={logout} />
}

ReactDOM.render(<App />, document.getElementById('root'));
/*/
// condições

const Greeting = ({ firstName, lastName }) => {
  return <h1>Hello, {firstName} {lastName}!</h1>
}

const Menu = ({ firstName, lastName, isLoggedIn = false, onLoging, onLogout }) => {
  return (
    <>
      <Greeting firstName={firstName} lastName={lastName} />
      { isLoggedIn
        ? onLogout && <button onClick={onLogout}>Logout</button>
        : onLoging && <button onClick={onLoging}>Login</button>
      }
    </>
  )
}

const App = () => {
  const login = () => console.log('login no sistema...')
  const logout = () => console.log('logout no sistema...')

  return <Menu firstName="Davvi"
    lastName="Duarte"
    isLoggedIn={false}
    onLoging={login}
    onLogout={logout} />
}

ReactDOM.render(<App />, document.getElementById('root'));
