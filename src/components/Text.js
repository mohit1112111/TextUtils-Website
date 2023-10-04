import React from 'react'

const Text = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#464444' : 'white'
    };
    return (

        <div className="row" my-3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h3>These are some features of TextUtils!</h3>
            <div className="col-sm-6" >
                <div className="card my-2 ">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title" >Upper Case</h5>
                        <p className="card-text">The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
                            To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
                            THIS IS AN EXAMPLE OF UPPER CASE.</p>
                    </div>
                </div>
            </div>



            <div className="col-sm-6" >
                <div className="card my-2">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Lower Case</h5>
                        <p className="card-text">If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.
                            this is an example of lower case.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6" >
                <div className="card ">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Capitalized Case</h5>
                        <p className="card-text">The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.
                            Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.
                            This Is An Example Of Capitalized Case.</p>
                    </div>
                </div>
            </div>


            <div className="col-sm-6">
                <div className="card ">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Binary Code Translator</h5>
                        <p className="card-text">Translate binary code into English and English into binary code with the following generator. Type out regularly and get a series of 0’s and 1’s in return.
                            01000010 01101001 01101110 01100001 01110010 01111001 00100000 01000011 01101111 01100100 01100101 00100000 01010100 01110010 01100001 01101110 01110011 01101100 01100001 01110100 01101111 01110010</p>

                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card my-2">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Sentence Case</h5>
                        <p className="card-text">The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence.
                            It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.
                            Note: it won’t, however, capitalize names or places.
                            This is an example of sentence case.</p>

                    </div>
                </div>
            </div>
            <div className="col-sm-6" >
                <div className="card my-2">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Reverse Text Generator</h5>
                        <p className="card-text">If you want a fast and quick way of making your text go back to front, the reverse text generator is great. Write out your text like normal and then see it get flipped. This tool is handy for fun transformations, coding challenges, or just for a unique way to present your content. Give it a try and enjoy the reversed text.txet sdrawkcab fo ecnetnes elpmaxe na si sihT</p>

                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="card my-2">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Decimal To Binary</h5>
                        <p className="card-text">Welcome to TextUtils! This app simplifies text operations for you. Easily convert decimal numbers to binary. Just enter your decimal number and get the binary equivalent.
                            Start converting today! It's quick and hassle-free. Try it now!.
                            Example:
                            Enter Decimal Number: 10
                            Converted Binary: 1010
                            Enter Decimal Number: 5
                            Converted Binary: 0101
                            You can enter any decimal number above and see it converted to binary.</p>

                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card my-2">
                    <div className="card-body" style={myStyle}>
                        <h5 className="card-title">Truncate Text</h5>
                        <p className="card-text">With our text truncation feature, users can easily shorten long paragraphs or messages to fit character limits. Customize the truncation by specifying the maximum length, and our app will trim the text while preserving its meaning. Say goodbye to cut-off messages; our tool ensures clear content. Whether for social media, SMS, or email, our app simplifies text length management.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Text
