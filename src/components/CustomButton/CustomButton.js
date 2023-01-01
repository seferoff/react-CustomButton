import React, { Component } from "react";
import "./CustomButton.css";

class CustomButton extends Component {
  state = {
    info: "The secret info",
    text: "Send",
    warnMessage: "Siz melumatlari localStorage-e gonderdiniz.",
    hint: "",
  };

  handleClick = () => {
    if (this.state.text === "Send") {
        this.setState({ text: "Delete"});
        alert(this.state.warnMessage);
        localStorage.setItem("info", this.state.info);
    }
    else {
        this.setState({ text: "Send"});
        alert("Deleted");
        localStorage.removeItem("info")
    }
  };

  showHint = () => {
    if (this.state.text === "Send") {
        this.setState({hint: "Eger buttona click etseniz melumatlar localStorage-e gonderilecek."})
    }
    else {
        this.setState({hint: "Eger buttona click etseniz melumatlar localStorage-den silinecek."})
    }
  };

  removeHint = () => {
    this.setState({hint: ""})
  }

  render() {
    const { text, hint} = this.state;
    let className = "send button";

    if (text === "Delete") {
        className = "sent button"
    }
    else {
        className = "send button"
    }

    return (
      <div className="main">
        <div className="hint">
          {hint}
        </div>
        <button
          className={className}
          type="button"
          onMouseOver={this.showHint}
          onClick={this.handleClick}
          onMouseOut={this.removeHint}
        >
          {text}
        </button>
      </div>
    );
  }
}

export default CustomButton;
