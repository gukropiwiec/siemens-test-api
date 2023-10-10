'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' :
                                            'id="xs-controllers-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' :
                                        'id="xs-injectables-links-module-AppModule-fb8373e51acceeb5c92feab4676f24bebeb714cd3e237bf08c522d55930ed28668e8db2e67bf2038c98e5c4b48a8ac12ee1d3ae31dacea08ed5f07de777255e1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EquipmentModule.html" data-type="entity-link" >EquipmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' : 'data-bs-target="#xs-controllers-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' :
                                            'id="xs-controllers-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' }>
                                            <li class="link">
                                                <a href="controllers/EquipmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' : 'data-bs-target="#xs-injectables-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' :
                                        'id="xs-injectables-links-module-EquipmentModule-f1200933a3733c8353357e192fd36b58fa7514dfab56b2d62c4f55a67d200b12c5a907d1f473d1a34fb6d44122338906d81516be0dbaf9e7830d107cf57c8687"' }>
                                        <li class="link">
                                            <a href="injectables/EquipmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EquipmentController.html" data-type="entity-link" >EquipmentController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateEquipmentDto.html" data-type="entity-link" >CreateEquipmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Equipment.html" data-type="entity-link" >Equipment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Equipment-1.html" data-type="entity-link" >Equipment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Point.html" data-type="entity-link" >Point</a>
                            </li>
                            <li class="link">
                                <a href="classes/Point-1.html" data-type="entity-link" >Point</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEquipmentDto.html" data-type="entity-link" >UpdateEquipmentDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EquipmentService.html" data-type="entity-link" >EquipmentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});