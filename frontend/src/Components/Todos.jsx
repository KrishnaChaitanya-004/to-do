import PropTypes from "prop-types";
export function Todos({ todos }) {

    const handleUpdate = async (id) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id: id, // Use todo._id directly
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then(async (res) => {
                const result = await res.json();
                alert(result.message || "To-do updated!");
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Failed to update the to-do.");
            });
    };

    return (
        <div className="list">
            {todos.map((todo) => (
                <div className="check" key={todo._id}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <button onClick={() => handleUpdate(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as Completed"}
                    </button>
                </div>
            ))}
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

Todos.defaultProps = {
    todos: [],
};
