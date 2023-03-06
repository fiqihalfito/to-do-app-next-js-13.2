import Button from "./Button"
import ProgressBar from "./ProgressBar"

const ListItem = ({ todo }) => {
    return (
        <li className="flex justify-between">
            <div id="info-container">
                <p>{todo.title}</p>
                <ProgressBar />
            </div>
            <div>
                <Button text={'Edit'} type={'edit'} />
                <Button text={'Delete'} type={'delete'} />
            </div>
        </li>
    )
}

export default ListItem