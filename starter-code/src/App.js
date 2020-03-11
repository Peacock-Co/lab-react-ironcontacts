import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  render() {
    const RamdomActor = () => {
      const actor = contacts[Math.floor(Math.random() * contacts.length)];
      contacts.concat(actor);
      console.log(actor);
    };
    return (
      <div className="App">
        <div className="container">
          <div className="h1">
            <h1>IronContacts</h1>
            <button className="buttom" key={"id"} onClick={RamdomActor}>
              Add Ramdom Contact
            </button>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(contacts)
                  .slice(0, 5)
                  .map((k, i) => {
                    const contact = contacts[k];
                    return (
                      <tr key={i}>
                        <td>
                          <img
                            className="pics"
                            src={contact.pictureUrl}
                            alt="pictures"
                          ></img>
                        </td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
