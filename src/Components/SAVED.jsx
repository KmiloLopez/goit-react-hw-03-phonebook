import React, { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            name: "",
            number: "",
            filter: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    addUser = () => {
        const { contacts, name, number} = this.state;
        if (name && number) {
            const nuevoContacto = { nombre: name, id: nanoid(), numero:number };
            this.setState({
                contacts: [...contacts, nuevoContacto],
                name: "",
                number: ""
            });
        }
    };
   
    handleInput = (e) => {
      const {name, value}=e.currentTarget;
        this.setState({
            [name]: value
        });
    };
    filterContacts =(e)=>{
      this.setState({
        filter:e.currentTarget.value
      })
    }
    

    render() {
        const { contacts, name, number, filter } = this.state;
        const values ={ contacts, name, number, filter };
        const filteredContactos = contacts.filter((contacto) => {
          return (contacto.nombre.toLowerCase().includes(filter.toLowerCase()));//para cuando no ingresamos ningun filtro, contacto.nombre incluye cualquier letra, si
        });
        return (
          <div>
            <form>
                <h1>Phonebook</h1>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleInput}
                />
                <p>Number</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleInput}
                />
                <button onClick={this.addUser}>Add contact</button>
                
            </form>
            <h1>Contacts</h1>
            <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={filter}
                    onChange={this.filterContacts}
                />
                {/* {contacts && name} */}
                
                <ul>
          {filteredContactos.map((contacto, index) => (
            <li key={index}>{contacto.nombre} - {contacto.numero}</li>
          ))}
        </ul>
            
          </div>
        );
    }
}
export default Form;
