import { html } from "lit-element";

export const home = html`                
                <div class="container">
                    <div class="row" id="banner">
                        <div class="column-50">
                            <img src="images/noun_building_1808.svg" class="logo" alt="logo">
                        </div>
                        <div class="column-50">
                            <h1>CORNERSTONE</h1>
                            <h3>Modern SPAs built with web components...</h3>
                            <h3>... without frameworks</h3>
                        </div>
                    </div>
                    <div class="row" id="features">
                        <stn-card title="Control" class="column" height="35rem">
                            <ul>
                                <li>Focus on your problems and your code</li>
                                <li>Easily extend it</li>
                                <li>A sane starting point without framework or tooling lock-in</li>
                            </ul>
                        </stn-card>
                        <stn-card title="Web Standards" class="column" height="35rem">
                            <p>Work with... not against the browser</p>
                        </stn-card>
                        <stn-card title="Modern JS" class="column" height="35rem">
                            <p>Code in Typescript and/or Javascript with all the latest features</p>
                        </stn-card>
                        </div>
                        <div class="row">
                        <stn-card title="Not a Framework!" class="column" height="35rem">
                            <p>A combination of the best tools, best practices, with standard setup</p>
                        </stn-card>
                        <stn-card title="Ready to Grow" class="column" height="35rem">
                            <p>Carefully avoid framework, cli, or any other lock-inh</p>
                        </stn-card>
                        <stn-card title="????" class="column" height="35rem">
                            <p>???</p>
                        </stn-card>
                    </div>
                    <div class="row">
                        <h5><img src="images/Cc.logo.circle.svg" class="attribution" alt="creative commons">
                            building by Antonis Makriyannis from the Noun Project
                        </h5>
                    </div>
                </div>
`;
