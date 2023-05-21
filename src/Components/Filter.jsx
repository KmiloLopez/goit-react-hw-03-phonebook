import React, { Component } from 'react'

export class Filter extends Component {
    continue =e =>{
        e.preventDefault()
    }
  render() {
    const {filter, filterContacts}= this.props;
    return (
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={filterContacts}
    />
    )
  }
}

export default Filter