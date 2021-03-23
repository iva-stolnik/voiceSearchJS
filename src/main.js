import Layout from "./view/layout.js";
import Data from "./data.js";
import {render} from "./render.js";
import {drzavaIspis} from "./view/results.js";
import voiceControl from "./voiceCommands/voice.js"
import {typoError} from "./view/error.js"
import {voiceError} from "./view/voiceError.js"

//import zaIframe from './openIframe.js';


export default ()=>{
    document.getElementById("app").innerHTML = Layout();
    let zaIspis = document.getElementById("zaIspis");
    var deleteInputValue = document.getElementById("searchTerm");
    const btn = document.getElementById("voiceComBtn");

    //*regular typing search 
    document.getElementById("searchTerm").addEventListener("change", async (event)=>{  
        await Data(event.target.value)
        .then((rezultat)=>{
            //console.log(rezultat);
            render(drzavaIspis(rezultat), zaIspis);   
            deleteInputValue.value = "";
        })
        .catch(() => { 
            typoError(event.target.value);
            deleteInputValue.value = "";
            }); 
    })  

    //*voice command search
    btn.addEventListener("click", async ()=>{
        const startPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
        //calling function before promise so it have 3sec to get voice input  
        voiceControl();

        startPromise
            .then(()=>{
                btn.classList.remove("animateMic");
            })
            .then(inputContent)
            .then((result)=>{
                Data(result)
                .then((newResult)=>{
                    render(drzavaIspis(newResult), zaIspis);
                    deleteInputValue.value = "";
                })
                .catch(() => { 
                    voiceError(inputContent);
                })                            
            })        

        //const inputContent is in function outside of promise coz it needs to collect value after 
        //startPromise with 3s timeout is called + inputContent() will be called by error msg if needed
        function inputContent(){
            const inputContent = document.getElementById("searchTerm").value;
            return inputContent; 

        }        
    });

    document.addEventListener("scroll", myFunction);

    function myFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.querySelector(".toTopBtn").style.visibility = "visible";
        } else {
            document.querySelector(".toTopBtn").style.visibility = "hidden";
     }
}
}

//* SAVE
