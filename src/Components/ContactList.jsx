import React, { Component, Fragment } from 'react'


export class ContactList extends Component {
    continue = e =>{
        e.preventDefault();
    }
  
  render() {
    const {filteredContactos, deleteContact}= this.props
    return (
        <Fragment>

            {
            filteredContactos.map((contacto, index) => (
                
                <li key={index}>
                    

                    {contacto.nombre} - {contacto.numero}
                    <button onClick={()=>deleteContact(index)} >Delete</button> 
                    
                </li>
                
                
            ))}
        </Fragment>
    )
  }
}

export default ContactList