
let scr = document.getElementById('screen');
let btns = document.getElementsByClassName('btn');
let scrval = '';
let res1 = '',res2 = '',html = '';

for (item of btns) {
    item.addEventListener('click',(e)=>{
        btntxt = e.target.innerHTML;
        console.log(btntxt);
        if(btntxt == '←'){
            scrval = scrval.slice(0,scrval.length-1);
            console.log(scrval);
            
            scr.value = scrval;
        }
        else if (btntxt == 'x') {
            btntxt = '*'
            scrval += btntxt;
            scr.value = scrval;
        } 
        else if(btntxt == 'C') {
            scrval = "";
            scr.value = scrval;
            
        }
        else if(btntxt == 'sin'){
            res1 = `sin(${scrval})`;
            scrval = eval(scrval);
            btntxt = Math.sin(scrval*(Math.PI/180));
            scrval = btntxt.toFixed(2);
            res2 = scrval;
            scr.value = scrval;
            html += `
                        <div id='box'>
                        <p>${res1}</p>
                        <p>${res2}</p>
                        </div>
                    `
            document.getElementById('hist_content').innerHTML= html;
        }
        else if(btntxt == 'cos'){
            res1 = `cos(${scrval})`;
            scrval = eval(scrval);
            btntxt = Math.cos(scrval*(Math.PI/180));
            scrval = btntxt.toFixed(2);            
            res2 = scrval;
            scr.value = scrval;
            html += `
                        <div id='box'>
                        <p>${res1}</p>
                        <p>${res2}</p>
                        </div>
                        `
            document.getElementById('hist_content').innerHTML= html;
        }
        else if(btntxt == 'tan'){
            res1 = `tan(${scrval})`;
            scrval = eval(scrval);
            btntxt = Math.tan(scrval*(Math.PI/180));
            scrval = btntxt.toFixed(2);            
            res2 = scrval;
            if(res1 == `tan(90)`){
                scr.value = "Infinity";
                html += `
                            <div id='box'>
                            <p>${res1}</p>
                            <p>&infin;</p>
                            </div>
                            `
                document.getElementById('hist_content').innerHTML= html;
            }
            else{
                
                scr.value = scrval;
                html += `
                            <div id='box'>
                            <p>${res1}</p>
                            <p>${res2}</p>
                            </div>
                            `
                document.getElementById('hist_content').innerHTML= html;
            }
        }
        else if(btntxt == 'x<sup>3</sup>'){
            res1 = `${scrval}^3`;
            scrval = eval(scrval);
            btntxt = (scrval*scrval*scrval);
            scrval = btntxt.toFixed(2);
            res2 = scrval;
            scr.value = scrval;
            html += `
            <div id='box'>
                        <p>${res1}</p>
                        <p>${res2}</p>
                        </div>
                    `
                    document.getElementById('hist_content').innerHTML= html;
        }
        else if(btntxt == '=') {    
            res1 = scrval;
            scrval = eval(scrval).toFixed(2);
            scr.value = scrval;
            res2 = scrval;
            html += `
                        <div id='box'>
                        <p>${res1}</p>
                        <p>${res2}</p>
                        </div>
                    `
            document.getElementById('hist_content').innerHTML= html;
        }
        else{
            scrval += btntxt;
            scr.value = scrval;
        }
        
    })
}
