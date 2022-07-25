let messageName
let workplaceName
let messageText

document.querySelector('#inputName').addEventListener('change', () => {
    messageName = document.querySelector('#inputName').value
    message = `Oi, me chamo ${messageName} e gostei do seu portfolio e queria conversar!`
    let messageEncoder = message.replaceAll(' ', '%20')
    document.querySelector('#sendWhatsappMessage').href =`https://wa.me/5544991247281?text=${messageEncoder}`
})
document.querySelector('#inputWorkplace').addEventListener('change', () => {
    workplaceName = document.querySelector('#inputWorkplace').value 
    messageName ? 

    message = `Oi, me chamo ${messageName}, sou da empresa ${workplaceName} e gostei do seu portfolio. Podemos marcar de conversar?` 
    : 
    message = `Oi, sou da empresa ${workplaceName}, gostei do seu portfolio e queria conversar!`

    let messageEncoder = message.replaceAll(' ', '%20')
    document.querySelector('#sendWhatsappMessage').href =`https://wa.me/5544991247281?text=${messageEncoder}`
})
document.querySelector('#messageText').addEventListener('change', () => {
    messageText = document.querySelector('#messageText').value 
    console.log(messageText)
    messageName && workplaceName ? message = `Oi, me chamo ${messageName}, sou da empresa ${workplaceName} e gostei do seu portfolio. \n ${messageText}` : message = `${messageText}`
    let messageEncoder = message.replaceAll(' ', '%20')
    document.querySelector('#sendWhatsappMessage').href =`https://wa.me/5544991247281?text=${messageEncoder}`
})

