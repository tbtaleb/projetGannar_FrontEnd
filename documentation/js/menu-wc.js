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
                    <a href="index.html" data-type="index-link">front-end Jobify Project documentation</a>
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
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccueilComponent.html" data-type="entity-link" >AccueilComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllExpiredJobsComponent.html" data-type="entity-link" >AllExpiredJobsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AllJobsComponent.html" data-type="entity-link" >AllJobsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ApplicationsListComponent.html" data-type="entity-link" >ApplicationsListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppliedCandidatesrListComponent.html" data-type="entity-link" >AppliedCandidatesrListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppNotificationsComponent.html" data-type="entity-link" >AppNotificationsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CandidateCVDisplayComponent.html" data-type="entity-link" >CandidateCVDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CandidateDetailComponent.html" data-type="entity-link" >CandidateDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CandidateInfoComponent.html" data-type="entity-link" >CandidateInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CandidatesListComponent.html" data-type="entity-link" >CandidatesListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExpJobDetailsComponent.html" data-type="entity-link" >ExpJobDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExpJobDivComponent.html" data-type="entity-link" >ExpJobDivComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JobComponent.html" data-type="entity-link" >JobComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JobDetailComponent.html" data-type="entity-link" >JobDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JobDetailsComponent.html" data-type="entity-link" >JobDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JobOfferDetailComponent.html" data-type="entity-link" >JobOfferDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JobsListComponent.html" data-type="entity-link" >JobsListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginCompComponent.html" data-type="entity-link" >LoginCompComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MatchComponent.html" data-type="entity-link" >MatchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MatchesComponentComponent.html" data-type="entity-link" >MatchesComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyJobOfferListComponent.html" data-type="entity-link" >MyJobOfferListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewJobFormComponent.html" data-type="entity-link" >NewJobFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecommandedCandidateComponent.html" data-type="entity-link" >RecommandedCandidateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecommendedCandidatesComponent.html" data-type="entity-link" >RecommendedCandidatesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignUpCompComponent.html" data-type="entity-link" >SignUpCompComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SingleCandidateComponent.html" data-type="entity-link" >SingleCandidateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UploadCvComponent.html" data-type="entity-link" >UploadCvComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserProfileComponent.html" data-type="entity-link" >UserProfileComponent</a>
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
                                <a href="classes/Application.html" data-type="entity-link" >Application</a>
                            </li>
                            <li class="link">
                                <a href="classes/Candidate.html" data-type="entity-link" >Candidate</a>
                            </li>
                            <li class="link">
                                <a href="classes/CV.html" data-type="entity-link" >CV</a>
                            </li>
                            <li class="link">
                                <a href="classes/JobOffer.html" data-type="entity-link" >JobOffer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Match.html" data-type="entity-link" >Match</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recruiter.html" data-type="entity-link" >Recruiter</a>
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
                                    <a href="injectables/ApplicationsService.html" data-type="entity-link" >ApplicationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CandidateService.html" data-type="entity-link" >CandidateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobOfferService.html" data-type="entity-link" >JobOfferService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchesService.html" data-type="entity-link" >MatchesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link" >NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecruiterService.html" data-type="entity-link" >RecruiterService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UploadEvent.html" data-type="entity-link" >UploadEvent</a>
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