import data from "./public/src/data.js"
import characterCard from "./public/src/components/characterCard/characterCard.js"

console.log(data)

class appContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const preCards = data.map( (character)=>{
            return `<character-card name="${character.name}" specie="${character.species}" gender="${character.gender}" house="${character.house}" year="${character.yearOfBirth}" alternatenames='${JSON.stringify(character.alternate_names)}'></character-card>`
        })
        const cardsJoinded = preCards.join("")
        this.shadowRoot.innerHTML = `
            ${cardsJoinded}
        `
    }
}

customElements.define("app-container", appContainer)