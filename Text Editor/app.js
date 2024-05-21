var text=document.getElementById("Text")
console.log(text)
var btns=document.getElementsByClassName("butons")
var fontOptions=document.getElementById("fontfamily")
var fontsize=document.getElementById("fontsize")



console.log("font==>" ,fontOptions)

fontOptions.addEventListener('change' , function(){
    console.log(this.value)
    if(this.value === "monospace"){
        text.style.fontFamily='monospace'
    
    }  
     if (this.value === "Sans-Serif"){
        text.style.fontFamily="sans-serif"
     }

     if(this.value === "Serif"){
        text.style.fontFamily="serif"
    }

})

fontsize.addEventListener('change',function(){
    console.log(this.value)
    if(this.value === "Heading"){
        text.style.fontSize="41px"
    }

    if(this.value === "Sub-Heading"){
        text.style.fontSize="25px"
    }

    if(this.value === "Normal"){
        text.style.fontSize="16px"
    }
})








for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        console.log("this=>", this.innerText)

        switch (this.innerText) {
            case 'Bold':
                if(text.style.fontWeight === 'bold'){
                    text.style.fontWeight = 'normal'
                }
                else{
                text.style.fontWeight = 'bold'
                }
                break;

                case 'Italic':
                    if(text.style.fontStyle === 'italic'){
                        text.style.fontStyle = 'normal'
                    }
                    else{
                text.style.fontStyle = 'italic'
                    }
                break;
        
                case 'UnderLine':
                    if(text.style.textDecorationLine == 'underline'){
                        text.style.textDecorationLine = 'none'
                    }
                    else{
                text.style.textDecorationLine = 'underline'
                    }
                break;

                case 'Right':
                    if(text.style.textAlign === 'right'){
                        text.style.textAlign = 'left'
                    }
                    else{
                text.style.textAlign = 'right'
                    }
                break;

                case 'Left':
                    if(text.style.textAlign === 'left'){
                        text.style.textAlign = 'none'
                    }
                    else{
                text.style.textAlign = 'left'
                    }
                break;

                case 'Center':
                    if(text.style.textAlign === 'center'){
                        text.style.textAlign = 'none'
                    }
                    else{
                text.style.textAlign = 'center'
                    }
                break;

                case 'Justify':
                    if( text.style.textAlign === 'justify'){
                        text.style.textAlign = 'left'
                    }
                    else{
                text.style.textAlign = 'justify'
                    }
                break;
            default:
                break;
        
        }
    })
    
}