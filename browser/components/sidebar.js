"use strict";

import React from "react";
import { Link } from "react-router";
import content from "../content/site";

const Sidebar = () => <div className="mainMenu">
        <h2><Link to="/" className="navBrand">{content.site.fullName}</Link></h2>
        <h5>
            <a href={content.site.instagram.address} className="navBrand">
                {content.site.instagram.name}
            </a>
        </h5>
        <hr className="navDivider" />
        <div className="navSubbar">
            {content.pageLinks.map(({ name, address }, index) =>
                <h4 key={index}><Link to={address}>{name}</Link></h4>
            )}
        </div>
    </div>;

export default Sidebar;
