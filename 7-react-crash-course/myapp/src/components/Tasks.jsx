import Task from './Task'

function Tasks( {tasks, onDelete, onToggle} ) {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />   /* key is a special prop that is required when rendering a list of elements, will not be passed to the Task component */
            ))}
        </>
    )
}

export default Tasks