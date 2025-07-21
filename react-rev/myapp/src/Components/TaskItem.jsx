export default function TaskItem({task, onDelete}){
    return (
        <div style={{
                padding: '8px',
                marginBottom: '6px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between'
                }}>
            <span>{task}</span>
            <button onClick={onDelete}>❌</button>
        </div>
    )
}