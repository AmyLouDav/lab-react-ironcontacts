import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0, 5);

function App() {
  const [agenda, setAgenda] = useState(initAgenda);

  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1);
    // const randomContact = remainingContacts[randomIndex] // it will also return a random contact but wont modify the original array

    setAgenda(agenda.concat(randomContact));
    //setAgenda([...agenda,randomContact])
  };

  const sortPopularity = () => {
    const newAgenda = [...agenda];
    newAgenda.sort((itemA, itemB) => {
      if (itemA.popularity > itemB.popularity) {
        return -1;
      }
      if (itemA.popularity < itemB.popularity) {
        return 1;
      }
      return 0;
    });

    setAgenda(newAgenda);
  };

  const sortAlphabetically = () => {
    const newAgenda = [...agenda];
    newAgenda.sort((itemA, itemB) => {
      if (itemA.name < itemB.name) {
        return -1;
      }
      if (itemA.name > itemB.name) {
        return 1;
      }
      return 0;
    });

    setAgenda(newAgenda);
  };

  const deleteContact = (contactid) => {
    const newAgenda = [...agenda];
    const index = newAgenda.findIndex(element => element.id === contactid);
// findindex is a method of an array which takes a function, need to pass in a parameter which is always the element in the array
// then element.id is compared to contactid and if they are equal the index of the array element is set as the const value
// for the array new agenda find the index and then do a loop(0,1,2 etc - basically does the same as a for loop) 
    newAgenda.splice(index, 1);

    setAgenda(newAgenda);
  };

  return (
    <>
      <h1>IRONCONTACTS</h1>
      <button onClick={addContact}>Add random contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortAlphabetically}>Sort by name</button>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
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
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
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
