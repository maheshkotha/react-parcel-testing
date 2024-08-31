import ReactDOM from 'react-dom/client'
import Header from './components/Header';


const App = () => {

  return (
    <div>
      <h1>React Testing Library</h1>
      <Header />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)