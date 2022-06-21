import { Button } from "primereact/button";
import React from "react";
import ReactDOM from "react-dom";
import { Card } from "primereact/card";
function Messages(props) {
    const footer = (
        <span>
            <Button
                label="Save"
                icon="pi pi-check"
                style={{ marginRight: ".25em" }}
            />
            <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-danger p-button-outlined"
            />
        </span>
    );

    const content = [{id:1, title: "Message 1", content: "Message 1 content"},{id:2, title: "Message 2", content: "Message 2 content"},{id:3, title: "Message 3", content: "Message 3 content"}];
    return (
        <>
            { content.map(({id, title, content}) =>{
    return(
      <Card title={title} key={id} footer={footer}>{content}</Card>
    )
  })}
        </>
    );
}

export default Messages;
if (document.getElementById("messages")) {
    const props = Object.assign({}, document.getElementById("messages").dataset)

    // render element with props (using spread)
    ReactDOM.render(<Messages {...props}/>, document.getElementById("messages"));
}
