`use strict`

(()=>{
    // Menu hamburguesa

//Cuando hago CLICK en el Header-button hace una FUNCIÖN
    //El Header-nav le TOGGLE de la clase isActive


    const headerButton = document.querySelector(`.Header-button`)
    const headerNav = document.querySelector (`.Header-nav`)
    
    console.log(headerButton)
    console.log(headerNav)
        
            headerButton.addEventListener(`click` , ()=>{
                headerNav.classList.toggle(`isActive`)
            })
    


//TABS

const tabsButton = document.querySelectorAll (`.Tabs-button`)
const tabsContent = document.querySelectorAll (`.Tabs-content`)


//Cuando hago click en los Tabs-button
    //Todos los tabs-content le remove la clase isActive
    //Tabs-content con la psiucuon index le add la claee isActive
    //Todos los Tabs-button le remove la clase isActive
    //Tabs-button de la posicion index le add la clase isActive.
    
    
tabsButton.forEach(( earchButton , i )=>{
    tabsButton[i].addEventListener(`click` , ()=>{

        tabsContent.forEach ((eachContent , i )=>{
            tabsContent[i].classList.remove(`isActive`)
        })

        tabsContent[i].classList.add(`isActive`)

        tabsButton.forEach((earchButton , i )=>{
            tabsButton[i].classList.remove(`isActive`)
        })

        tabsButton[i].classList.add(`isActive`)
    })
})


})()

