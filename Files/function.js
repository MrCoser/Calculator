let string = "";
let btn = document.querySelectorAll('.button');
Array.from(btn).forEach((b)=>{
    b.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        
        else if(e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == '+/-') {
            if(string.charAt(0) == '-') {
                string = string.replace('-', '');
            }

            else {
                string = string.replace('', '-');
            }
            document.querySelector('input').value = string;
        }

        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }    
    })
})
