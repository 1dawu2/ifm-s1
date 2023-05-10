//import "@ui5/webcomponents-base/dist/CustomElementsScope.js"
//setCustomElementsScopingSuffix("ifm");
import "@ui5/webcomponents/dist/Button.js";
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
        uiCardWC.innerHTML = `<ui5-button icon="menu" slot="startButton" id="startButton"></ui5-button>`
        /*         uiCardWC.innerHTML =
                    `<ui5-card-ifm class="small">
                        <ui5-card-header-ifm slot="header" title-text="Dona Maria Moore" subtitle-text="Senior Sales Executive">
                            <img src="../../../assets/images/avatars/man_avatar_1.png" slot="avatar" />
                        </ui5-card-header-ifm>
                        <div class="content content-padding">
                            <ui5-title-ifm level="H5" style="padding-bottom: 1rem;">Contact details</ui5-title-ifm>
        
                            <div class="content-group">
                                <ui5-label-ifm>Company Name</ui5-label-ifm>
                                <ui5-title-ifm level="H6">Company A</ui5-title-ifm>
                            </div>
                            <div class="content-group">
                                <ui5-label-ifm>Address</ui5-label-ifm>
                                <ui5-title-ifm level="H6">481 West Street, Anytown 45066, USA</ui5-title-ifm>
                            </div>
                            <div class="content-group">
                                <ui5-label-ifm>Website</ui5-label-ifm>
                                <ui5-link-ifm target="_blank">www.company_a.example.com</ui5-link-ifm>
                            </div>
                        </div>
                    </ui5-card-ifm>` */
        shadowRoot.append(uiCardWC);
    }
}
