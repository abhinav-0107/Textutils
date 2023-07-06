import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const[text,setText] = useState('');

    const handleUpClick = () =>{
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }

    const handlelowClick = () =>{
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }

    const handleResetClick = () =>{
        setText('');
        props.showAlert("Text cleared!","success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    } 

    // While making a textarea we have to listen to the onChange Event and have to write the logic that what we want to do when the user tries to change the text area. When we listen to the onchange Event then we get free event object and from there we can extract the current value of the text form.

    const handleOnChange = (event) =>{
        setText(event.target.value);
    } 

    return (
        <>
        <div className='container my-3 text-center'>

            {/* Heading */}
            <h1 className={`text-${props.mode=== 'light' ? 'dark' : 'light'}`}>Enter Text to analyze!</h1>

            {/* TextArea */}
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode=== 'light' ? 'light' : 'secondary'} text-${props.mode=== 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id="mybox" rows="8">
                </textarea>
            </div>

            {/* All Buttons */}
            <button className="btn btn-danger mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-dark mx-1 my-1" onClick={handleResetClick}>Reset</button>

        </div>

        <div className={`container my-5 text-center text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>Estimated reading time : {0.008 * text.split(" ").length} minutes</p>
            <div className='my-5'>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Type in the text box above to preview it here!"}</p>
            </div>
        </div>
        </>  
  )
}

TextForm.propTypes = {
    title: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    title: "Enter Text to analyze"
}