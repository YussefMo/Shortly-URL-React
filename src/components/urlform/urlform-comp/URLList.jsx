import URLListItem from "./URLListItem"

function URLList ({ urls, isLoading, errorMessage, setUrls }) {
    const handleDelete = (index) => {
        setUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    };

    return(
        <ul>
            {isLoading && 
            <li>
                <p>Loading...</p>
            </li> }
            {errorMessage && 
            <li>
                <p> {errorMessage}</p>
            </li> }
            {urls.map((url,i)=>(
                <URLListItem 
                onDelete={() => handleDelete(i)}
                key={i} 
                submitURL={url.submitURL}
                shortenedURL={url.shortenedURL} />
            ))}
        </ul>
    )
}

export default URLList