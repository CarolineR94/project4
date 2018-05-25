class Flash {

  static _messages = null;

  // Creates a message object with type as a key and message as a value
  static setMessage(type, message) {
    this._messages = this._messages || {};
    this._messages[type] = message;
  }

  // Return the message object
  static getMessages() {
    return this._messages;
  }

  // Sets the message back to null
  static clearMessages(){
    this._messages = null;
  }
}

export default Flash;
