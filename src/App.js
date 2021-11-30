import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0, 5);

function App() {
  const [agenda, setAgenda] = useState(initAgenda);

  const addContact = () =>{
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1);
    // const randomContact = remainingContacts[randomIndex] // it will also return a random contact but wont modify the original array
  
    setAgenda(agenda.concat(randomContact));
    //setAgenda([...agenda,randomContact])
  }

  return (
    <>
    <h1>IRONCONTACTS</h1>
    <button onClick={addContact}>Add Contact</button>
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar Winner?</th>
            <th>Emmy Winner?</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="100px"
                    height="150px"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
