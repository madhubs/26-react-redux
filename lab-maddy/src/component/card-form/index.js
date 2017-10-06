import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: props.card ? props.card.categoryId : props.categoryId,
      id: props.card ? props.card.id : undefined,
      timestamp: props.card ? props.card.timestamp : undefined,
      title: props.card ? props.card.title : '',
      content: props.card ? props.card.content : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form
        className="card-form"
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter a category for your expense"
          value={this.state.title}
          onChange={this.handleChange}/>

          <input
            type="text"
            name="content"
            placeholder="enter content for your expense"
            value={this.state.content}
            onChange={this.handleChange}/>

          <button type="submit">{this.props.buttonText}</button>
        </form>
    );
  }
}

export default CardForm;
