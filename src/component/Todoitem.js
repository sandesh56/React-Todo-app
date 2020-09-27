import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "5px",
            borderBottom: "1px #ccc solid",

            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    />{" "}
                    <button
                        onClick={this.props.todoDelete.bind(this, id)}
                        style={btnStyle}
                    >
                        x
          </button>
                    {title}
                </p>
            </div>
        );
    }
}

//button style
const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "3px 3px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
};
//propTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    todoDelete: PropTypes.func.isRequired,
};

export default Todoitem;
