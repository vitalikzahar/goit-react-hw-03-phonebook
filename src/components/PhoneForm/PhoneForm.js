import { Component } from 'react';
import {
  FormButton,
  FormInput,
  InputName,
  InputNumber,
} from './PhoneForm.styled';

export class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeName = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormInput onSubmit={this.handleSubmit}>
        <label>
          Name
          <InputName
            value={name}
            onChange={this.handleChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <InputNumber
            value={number}
            onChange={this.handleChangeName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <FormButton type="submit">Add contacts</FormButton>
      </FormInput>
    );
  }
}
