import { useState } from 'react'
import { BaseColaboradores } from './components/BaseColaboradores'
import Form from './components/Form'
import ItemList from './components/ItemList'
import Header from './components/Header'


const App = () => {
  const [colab, setColab] = useState(BaseColaboradores);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const newColab = {
      id: Date.now(),
      nombre: name,
      correo: mail,
    };
    

    setColab([...colab, newColab]);
    setName("");
    setMail("");

  };


  return (
    <div className="container ">
      <Header onChange={(e) => setSearch(e.target.value)} />
      <Form
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        mail={mail}
        setMail={setMail} />
      <hr />
      <ItemList
        colab={colab}
        search={search.toLowerCase()} />
    </div>
  )
}

export default App
