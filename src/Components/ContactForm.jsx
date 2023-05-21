import React, { Component, Fragment } from "react";
import { nanoid } from "nanoid";


export class ContactForm extends Component {
    continue = (e) => {
        e.preventDefault();
    };
    state = {
        name: "",
        number: "",
    };
    addUser = () => {
        const { contacts } = this.props;
        const { name, number } = this.state;
        if (name && number) {
            const nuevoContacto = {
                nombre: name,
                id: nanoid(),
                numero: number,
            };
            this.setState({
                contacts: [...contacts, nuevoContacto],
                name: "",
                number: "",
            });
        }
    };
    
    render() {
        const { handleInput, name, number, addUser } = this.props;
        return (
            <Fragment>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInput}
                />
                <p>Number</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInput}
                />
                <button onClick={addUser}>Add contact</button>
            </Fragment>
        );
    }
}

export default ContactForm;
