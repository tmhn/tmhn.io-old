"use strict";

import React from "react";
import { Link } from "react-router";
import DocumentTitle from "react-document-title";
import PageHeader from "../../components/page-header";

const Doppio = () =>
    <DocumentTitle title="Doppio Health - Tom Hanson">
        <div>
            <PageHeader text="Doppio Health" />
            <div className="pageContent">
                <h4>Doppio Health</h4>
                <hr />
                <p>
                    Doppio Health is a system that was developed as part of my undergraduate
                    Computer Science degree for my dissertation. The purpose of the system was
                    to allow healthcare professionals to create personalised mobile applications
                    for patients.Rather than downloading generic solutions that cater for many
                    situations, the Doppio Health iOS application will be customised for the
                    patient with no excess functionality. The Doppio Health system comprises of
                    a React.js web application and a React Native iOS application that
                    collaborate together.

                    <br /><br />

                    Doppio Health originally implemented a Google Blockly visual programming
                    user-interface, however after a Feasibility test conducted using the
                    technologies, the decision was taken to move towards a solution that would
                    ease data entry on behalf of the healthcare professional.
                </p>
                <Link to="/projects" className="btn btn-default button">
                    Back to Projects
                </Link>
            </div>
        </div>
    </DocumentTitle>;

export default Doppio;
