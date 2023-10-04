import React, { useState } from 'react'
import Text from './Text';
export default function TextFrom(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("The text is converted to upper case", "success");
    }
    const handleLowerClick = () => {
        // console.log("clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("The text is converted to lower case", "success");
    }
    const handleSentenceCase = () => {
        let newText = text.toLowerCase().split(' ');
        for (let i = 0; i < newText.length; i++) {
            let c = newText[i].charAt(0).toUpperCase();
            newText[i] = c + newText[i].slice(1);
        }
        newText = newText.join(' ');
        setText(newText);
        props.showAlert("The text is converted to sentence case ", "success");
    }
    const handleClearText = () => {
        // console.log("clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("The text is cleared", "warning");
    }
    const handleUpChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }
    const handleCopyText = (event) => {
        // let text = document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0,9999);
        // document.getSelection().removeAllRanges();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("The text is copied", "success");
    }
    const handleExtraSpaces = (event) => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const downloadTextAsFile = () => {
        const analyzedText = text;
        const filename = "analyzed_text.txt";

        const blob = new Blob([analyzedText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();

        URL.revokeObjectURL(url);
    }


    const handeBinaryText = () => {
        let newString = '';
        console.log(typeof (text));
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let binaryValue = charCode.toString(2);
            newString += binaryValue + ' ';
        }
        newString = newString.slice(0, newString.length - 1);
        setText(newString);
        props.showAlert("The text is converted into binary", "success");
    }
    const handeBinaryNumber = () => {
        let binary = '';

        let n = Number.parseInt(text);
        while (n) {
            binary = (n % 2) + binary;

            n = Math.floor(n / 2);
        }
        setText(binary);
        props.showAlert("The text is converted into binary", "success");
    }

    function randomString() {
        let length = 100;
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setText(result);
    }
    const handleReverseString = () => {
        let str = "";
        for (let i = text.length - 1; i >= 0; i--) {
            str += text[i];
        }
        setText(str);
        props.showAlert("The text is Reversed", "success");
    }
    const handleTruncateText=()=>{
        let str = text;
        let len = prompt("Please give the length to truncate the string");
        len = Number.parseInt(len);
        let flag=false;
        if(str.length <= len){
            setText(str);

        }else{
            flag = true;
            let substr = text.substring(0,len);
            setText(substr);
        }
        if(flag){
            props.showAlert("The text is Truncated", "success");
        }else{
            props.showAlert("The length to truncate is greater than your text", "danger");
        }
    }
    // const handleItalicText=()=>{
    //     const italicStyle = {
    //         fontStyle: 'italic',
    //       };
    //       const newText = <span style={italicStyle}>{text}</span>;
    //       setText(newText);
    //       props.showAlert('The text is converted to italic', 'success');
    // }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='heading'>{props.heading}</h2>
                <div className="mb-2">

                    <textarea className="form-control" value={text} onChange={handleUpChange} style={{ backgroundColor: props.mode === 'dark' ? '#383434' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
            </div>
            <div className='container my-3 text-center col' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {/* <div className=''></div> */}
                <button disabled={text.length === 0} className='btn btn-primary my-1 mx-1 btn-sm' onClick={handleUpClick}>Convert to UpperCase </button>
                <button disabled={text.length === 0} className='btn btn-success mx-1 my-1 btn-sm' onClick={handleLowerClick}>Convert to LowerCase </button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1 btn-sm' onClick={handleSentenceCase}>Sentence Case </button>
                <button disabled={text.length === 0} className='btn btn-dark my-1 mx-1 btn-sm' onClick={handleClearText}>Clear Text </button>
                <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1 btn-sm' onClick={handleCopyText}>Copy Text </button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1 btn-sm' onClick={handleExtraSpaces}>Remove Extra spaces </button>
                <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1 btn-sm' onClick={downloadTextAsFile}>Download Text</button>
                <button disabled={text.length === 0} className='btn btn-success mx-1 my-1 btn-sm' onClick={handeBinaryText}>Text To Binary</button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1 btn-sm' onClick={handeBinaryNumber}>Decimal To Binary</button>
                <button disabled={text.length === 0} className='btn btn-success mx-1 my-1 btn-sm' onClick={randomString}>randomString</button>
                <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1 btn-sm' onClick={handleReverseString}>Reverse Text</button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1 btn-sm' onClick={handleTruncateText}>Truncate Text</button>
                {/* <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1' onClick={handleItalicText}>Convert to Italic</button> */}
            </div>


            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.length === 0 ? 0 : text.split(/\s+/).length} words {text.length} characters</p>
                <p>{text.length === 0 ? 0 : text.split('.').length} sentences</p>
                <p>{text.length === 0 ? 0 * text.split(" ").length : 0.008 * text.split(" ").length} Minutes to read</p>
                <p>{text.length === 0 ? 0 * text.split(" ").length : 0.0066 * text.split(" ").length} Minutes to speaking</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview "}</p>
            </div>
            <Text mode={props.mode}/>
        </>
    )
}
