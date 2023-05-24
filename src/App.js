import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import {Container, Container2} from "./Components/Styled/Container.styled";
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { id: "id-1", nombre: "Rosie Simpson", numero: "459-12-56" },
                { id: "id-2", nombre: "Hermione Kline", numero: "443-89-12" },
                { id: "id-3", nombre: "Eden Clements", numero: "645-17-79" },
                { id: "id-4", nombre: "Annie Copeland", numero: "227-91-26" },
            ],
            name: "",
            number: "",
            filter: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    addUser = () => {
        const { contacts, name, number } = this.state;
        let included =false;
        if (name && number) {
            contacts.map((contacto)=>{
                
                return( contacto.nombre.toLowerCase()===name.toLowerCase()
                    ?included=true:console.log("")
                    )
            })
            if(included===true){
                alert(`${name} is already in contacts`)
                this.setState({
                    name: "",
                    number: "",
                })

            }
            else{
                this.AddIT()
            } 
        }
        
    };
    AddIT=()=> {
        const { contacts, name, number } = this.state;
        let nuevoContacto = {
            nombre: name,
            id: nanoid(),
            numero: number,
        };
        this.setState({
              contacts: [...contacts, nuevoContacto],
              name: "",
              number: "",
          })
    }

    handleInput = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };
    filterContacts = (e) => {
        this.setState({
            filter: e.currentTarget.value,
        });
    };
    deleteContact =(index)=>{
       console.log("index",index)
       
       const newContacts=this.state.contacts
       newContacts.splice(index,1)
       this.setState({
        contacts:newContacts
       })
       
    }
    
    componentDidUpdate(){
        const {contacts}= this.state
        let contar = 1
        if (contar===1 && contacts.length>0){
            localStorage.setItem('myContacts', JSON.stringify(contacts));
            contar=2;
        }
        let contactsFromLocal=localStorage.getItem('myContacts')
        if(JSON.parse(contactsFromLocal)!==contacts){
            localStorage.setItem('myContacts', JSON.stringify(contacts))
        }
        
        
        
        
    }
    componentDidMount(){
        const {contacts}= this.state
        let contar = 1
        if (contar===1 && contacts.length>0){
            localStorage.setItem('myContacts', JSON.stringify(contacts));
            contar=2;
        }
       
        let contactsFromLocal=localStorage.getItem('myContacts')
        let contactosFromLocal =JSON.parse(contactsFromLocal)
      
        this.setState({
            contacts:contactosFromLocal
           })
           
    }
    render() {
        const { contacts, name, number, filter } = this.state;
        
        const filteredContactos = contacts.filter((contacto) => {
            return contacto.nombre.toLowerCase().includes(filter.toLowerCase()); //para cuando no ingresamos ningun filtro, contacto.nombre incluye cualquier letra, si
        });
        
        return (
            <Container>
                <Container2>
                    <h1>Phonebook</h1>
                    <ContactForm
                        handleInput={this.handleInput}
                        name={name}
                        number={number}
                        addUser={this.addUser}
                    />
                    <h1>Contacts</h1>
                    <Filter filterContacts={this.filterContacts} filter={filter} />
                    <ContactList filteredContactos={filteredContactos} deleteContact={this.deleteContact}/>

                </Container2>
            </Container>
        );
    }
}
ContactForm.propTypes ={

    
    name:PropTypes.string,
    number:PropTypes.number

}
export default Form;
