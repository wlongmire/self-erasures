import { BlockErase } from "../styles/styleHome"
import { CollageFrame } from "../styles/styleModules"

import images from '../data/collageUrls.json';

export default function poetPage() {
    return(<div className="p-md-5">
        
        <h1>The Poet</h1>

        <div className="d-flex gap-3 flex-column justify-content-between">
            <CollageFrame position={3} horizontal={true} image={images[0]} className="collageFrame"/>

            <div id="content-container" className="d-flex align-items-center">
                <img className="pr-3 pt-3" width="30%" min-width="600px" src="/images/heather_headshot.jpeg" alt="poet_headshot"/>
                <div className="p-3 display-7 d-flex">
                    <div>
                        <p>Heather Bowlan is a writer, artist, and community organizer in Philadelphia. Her work has appeared in the anthology Feminisms in Motion, the journals New Ohio Review, Nashville Review, the Anarchist Review of Books, the Ploughshares blog, and elsewhere. She completed her MFA in Creative Writing at North Carolina State University, served as an editor for BOAAT Press and Raleigh Review, and received fellowships from the Virginia Center for the Creative Arts and the Vermont Studio Center.</p>
                        <p>In addition to her writing, Heather works in mixed-media collage, examples of which are included as the cover and throughout the print version of Highlights and Blackouts.</p>
                        <h4 className="lh-lg">You can find more of Heather's work at <BlockErase><a href="https://www.heatherbowlan.com/">heatherbowlan.com</a></BlockErase></h4>
                    </div>
                </div>
            </div>

            <CollageFrame position={3} horizontal={true} image={images[1]} className="collageFrame"/>
        </div>
        
    </div>);
}