import React, { Component } from "react";
import "./CustomButton.css";

class CustomButton extends Component {
  state = {
    info: "The secret info",
    text: "Send",
    warnMessage: "Siz melumatlari localStorage-e gonderdiniz.",
    hint: "Eger buttona click etseniz melumatlar localStorage",
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
        <button
          className={className}
          style={{backgroundColor:this.props.backgroundColor}}
          title={`${hint} ${text === "Send"?'-e gonderilecek':'-den silinecek'}.`}
          onClick={this.handleClick}
        >
          {text}
        </button>
      </div>
    );
  }
}

export default CustomButton;
