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
    let messageEncoded = message.replaceAll(' ', '%20')
    document.querySelector('#sendWhatsappMessage').href =`https://wa.me/5544991247281?text=${messageEncoded}`
})

const changeKnowledgeShowed = (childrenIndex, element) => {
    document.querySelector('.group-active').classList.remove('group-active')
    document.querySelector('.dash-select-active').classList.remove('dash-select-active')
    element.classList.add('dash-select-active')
    document.querySelector('.knowledge-groups').children[childrenIndex].classList.add('group-active')
}

const scrollToElement = (element) => {
    console.log(element, element.getBoundingClientRect(), element.getBoundingClientRect().y)
    const yPosition = element.getBoundingClientRect().y
        window.scrollTo(0, element.getBoundingClientRect().y - 50)
}

const showNavBar = () => document.querySelector('.nav').classList.toggle('show')