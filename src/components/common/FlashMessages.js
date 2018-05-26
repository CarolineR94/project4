import React from 'react';
import Flash from '../../lib/Flash';

class FlashMessage extends React.Component {

  state = {
    messages: null
  }

  // If there are no messages, return false. Otherwise show the message for 2 seconds then clear it.
  componentWillUpdate() {
    const messages = Flash.getMessages();

    if(!messages) return false;

    this.setState({ messages });
    Flash.clearMessages();

    setTimeout(() => this.setState({ messages: '' }), 2000);
  }

  // Show the correct message (e.g. info, warning) based on object keys.
  render() {
    return (
      <div>
        {this.state.messages && Object.keys(this.state.messages).map(type =>
          <div key={type} className={`notification is-${type}`}>{this.state.messages[type]}</div> // in [] as we don't have a key of .type
        )}
      </div>
    );
  }
}

export default FlashMessage;
