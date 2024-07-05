
const d = document;
const diceBtn = d.querySelector('#diceBtn');

let dataSlip = {};

const API = `https://api.adviceslip.com/advice`;


//Advice
const adviceInner = d.querySelector('#advice');
// id Advice
const idAdvice = d.querySelector('#adviceId');





    // peticion

    const getApi = async () => {
        const id = Math.floor(Math.random()*120);
        const URL = `${API}/${id}`;
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                
            }
            const data = await response.json();
            console.log(data);
            dataSlip = data.slip;
            const {advice, id} = dataSlip;
            adviceInner.innerText = advice;
            idAdvice.innerText = id;
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Advice slip not found');
           
        }
    } 

     //Fn clic btn

 diceBtn.addEventListener('click', async() => {

    getApi();
   
}

)

//Inicializar peticion
    getApi();

   