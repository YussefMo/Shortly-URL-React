import { useState } from "react";
import Box from '../../UI/box/Box'

function URLListItem({ submitURL, shortenedURL, onDelete }) {
    const [isCopy, setIsCopy] = useState(false)
    const copy = async () => {
        await navigator.clipboard.writeText(shortenedURL);
        setIsCopy(true)
    }
    return (
        <li>
            <div>
                <p>{submitURL}</p>
                <hr />
                <span>
                    <p>{shortenedURL}</p>
                    <Box className={'list-action'}>
                        {!isCopy ?
                            (<button onClick={copy} className="btn-standard">Copy</button>) : (
                                <button className="btn-standard copied">Copied!</button>
                            )}
                        <button onClick={() => onDelete()} className="btn-standard delete">Delete</button>
                    </Box>
                </span>
            </div>
        </li>
    )
}

export default URLListItem;