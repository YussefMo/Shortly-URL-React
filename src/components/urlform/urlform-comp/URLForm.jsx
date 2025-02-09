import { useState } from "react";

function URLForm({ setSubmitURL }) {
    const [inputValue, setInputValue] = useState('');
    const [error , setError] = useState('')

    function isValidURL(url) {
        try {
            new URL(url);
            return true;  
        // eslint-disable-next-line no-unused-vars
        } catch (_) {
            return false;
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setError('Please enter a URL');
            return;
        }
        if (!isValidURL(inputValue)) {
            setError('Please enter a valid URL example https://www.example.com or https://example.com');
            return;
        }
        setSubmitURL(inputValue);
        setError('');
        setInputValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                className={error && 'input-error'}
                type="text"
                placeholder="Shorten a link here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="btn-standard">
                Shorten It!
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default URLForm;
