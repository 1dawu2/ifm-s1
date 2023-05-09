import "@ui5/webcomponents/dist/Card.js" // ui5-card

export default class PlayerCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();

        this._export_settings = {};
        this._export_settings.imgURL = "";
    }

    // SETTINGS
    get imgURL() {
        return this._export_settings.imgURL;
    }

    set imgURL(value) {
        this._export_settings.imgURL = value;
    }

    static get observedAttributes() {
        return [
            "imgURL",
        ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            this[name] = newValue;
        }
    }

    render() {
        const { shadowRoot } = this;

        // create player card element
        const playerCard = document.createElement('div');
        playerCard.id = 'player-card';

        // append player card to shadow DOM
        shadowRoot.appendChild(playerCard);

        var uiCardWC = document.createElement('div');
        uiCardWC.innerHTML =
            `<ui5-card class="small">
                <ui5-card-header slot="header" title-text="Dona Maria Moore" subtitle-text="Senior Sales Executive">
                    <img src="../../../assets/images/avatars/man_avatar_1.png" slot="avatar" />
                </ui5-card-header>
                <div class="content content-padding">
                    <ui5-title level="H5" style="padding-bottom: 1rem;">Contact details</ui5-title>

                    <div class="content-group">
                        <ui5-label>Company Name</ui5-label>
                        <ui5-title level="H6">Company A</ui5-title>
                    </div>
                    <div class="content-group">
                        <ui5-label>Address</ui5-label>
                        <ui5-title level="H6">481 West Street, Anytown 45066, USA</ui5-title>
                    </div>
                    <div class="content-group">
                        <ui5-label>Website</ui5-label>
                        <ui5-link target="_blank">www.company_a.example.com</ui5-link>
                    </div>
                </div>
            </ui5-card>`
        shadowRoot.append(uiCardWC);
    }
}
