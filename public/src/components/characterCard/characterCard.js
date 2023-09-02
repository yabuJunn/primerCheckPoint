class characterCard extends HTMLElement {
    properties = {}
    

    static get observedAttributes() {
        return ["name", "specie", "gender", "house", "year", "alternatenames"]
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        const alternateNamesArray = JSON.parse(this.properties.alternatenames)
        //const alternateNamesArrayPlus = alternateNamesArray.unshift(this.properties.name)
        this.properties.alternatenames = alternateNamesArray
        this.properties.index = 0
        this.properties.alternaNameShow = "Presiona para mostrar"
        this.mount()
    }

    mount() {
        this.render()
        
        const btn = this.shadowRoot.querySelector("button")
        btn.addEventListener("click", ()=>{
            console.log("Evento")
            console.log(this.properties.alternatenames)
            
            if(this.properties.alternatenames.length === 0) {
                this.properties.alternaNameShow = "No tiene nombres alternativos"
            } else {
                if (this.properties.alternatenames.length === this.properties.index) {
                    console.log("Sobrepasa el length")
                    this.properties.index = 0
                }

                this.properties.alternaNameShow = this.properties.alternatenames[this.properties.index]
                this.properties.index = this.properties.index + 1
            }
            

            
            
            console.log("Termina la condicion")
            this.mount()
        })
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case "name":
                this.properties.name = newValue
                break;
            case "specie":
                this.properties.specie = newValue
                break;
            case "gender":
                this.properties.gender = newValue
                break;
            case "house":
                this.properties.house = newValue
                break;
            case "year":
                this.properties.year = newValue
                break;
            case "alternatenames":
                this.properties.alternatenames = newValue
                break;
            default:
                break;
        }
    }
    
    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/public/src/components/characterCard/characterCard.css">

            <div class="characterCard">
                <h1>${this.properties.name}</h1>
                <p>${this.properties.specie}</p>
                <p>${this.properties.gender}</p>
                <p>${this.properties.house}</p>
                <p>${this.properties.year}</p>
                <button>Show names</button>
                <p>Alternative names: ${this.properties.alternaNameShow}</p>
            </div>
        
        `
    }

}

customElements.define("character-card", characterCard)

export default characterCard