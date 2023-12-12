import { Alphabet } from './data/alphabet.js';
import { removeSameValue , showHtml } from './utils/utils.js';


document.querySelector('.submit').addEventListener('click',()=>{
    const name = document.querySelector('.your-name').value ;
    const partnerName = document.querySelector('.partner-name').value ;
    if ( name === '' || partnerName === '') {
        return alert('Enter full details');
    }

    const nameArray = name.split("");
    const partnerNameArray = partnerName.split("");
    
    const calculateArray = [];
    nameArray.forEach(yname => {
        partnerNameArray.forEach(pname => {
            if (yname === pname) {
                calculateArray.push(yname);
            }
        })
    });

   const CalculateArray = removeSameValue(calculateArray);
   
   let totalPercentage = 0;
   CalculateArray.forEach((word) => {
    Alphabet.forEach((alphaword) => {
        if (word === alphaword.id ) {
            totalPercentage += alphaword.value
        }
    })
   })

   showHtml(totalPercentage);

})

document.querySelector('body').addEventListener('keydown' , (event)=> {
    if (event.key === 'Enter') {
        const name = document.querySelector('.your-name').value ;
    const partnerName = document.querySelector('.partner-name').value ;
    if ( name === '' || partnerName === '') {
        return alert('Enter full details');
    }

    const nameArray = name.split("");
    const partnerNameArray = partnerName.split("");
    
    const calculateArray = [];
    nameArray.forEach(yname => {
        partnerNameArray.forEach(pname => {
            if (yname === pname) {
                calculateArray.push(yname);
            }
        })
    });

   const CalculateArray = removeSameValue(calculateArray);
   
   let totalPercentage = 0;
   CalculateArray.forEach((word) => {
    Alphabet.forEach((alphaword) => {
        if (word === alphaword.id ) {
            totalPercentage += alphaword.value
        }
    })
   })

   showHtml(totalPercentage);
    }
})

document.querySelector('.DOCUMENTATION').addEventListener('click' , ()=> {
    document.querySelector('.container-info').classList.add('nopopup');
    document.querySelector('.DOCUMENTATION').classList.add('nopopup');
    document.querySelector('.goback').classList.add('showgoback');
    document.querySelector('.docu').classList.add('show')
});

document.querySelector('.gooback').addEventListener('click',()=> {
    document.querySelector('.container-info').classList.remove('nopopup');
    document.querySelector('.DOCUMENTATION').classList.remove('nopopup');
    document.querySelector('.gooback').classList.remove('showgoback');
    document.querySelector('.docu').classList.remove('show')
})