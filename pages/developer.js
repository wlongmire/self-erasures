import { BlockErase } from "../styles/styleHome"
import { CollageFrame } from "../styles/styleModules"

import images from '../data/collageUrls.json'

export default function developerPage() {
    return(<div className="p-md-5">

        
        <h1>The Developer</h1>

        <div className="d-flex pt-md-1 gap-3 flex-column justify-content-between">
            <CollageFrame position={0} horizontal={true} image={images[3]} className="collageFrame"/>

            <div id="content-container" className="d-flex">
                <img className="pr-3 pt-3" width="30%" min-width="600px" src="/images/warren_headshot.png" alt="poet_headshot"/>
                <div className="p-3 display-7 align-items-center">
                    <div>
                        <p>Warren C. Longmire is an uncle, writer, performer and educator from the bad part of Philadelphia. He is a graduate of the University of Pennsyvania with a BSE in digital media design and has worked in digital technologies for over 15 years. He has worked at Microsoft Inc, Electronic Arts, Vanguard Studios, Little Bird Games and Outpost4 in various development and QA roles.</p>
                        <p>As writer working at the intersection of arts and technology, Warren has developed two one-man shows, <em>Do.Until.True (2012)</em> and <em>It in the Time of Moore (2014)</em> in addition to stage proformance around his two most recent full length books <em>Open Source (2021 Radiator Press)</em> and <em>Open Source (2022 Bunny Presse)</em>. He is the founder of _mixlit, a event series and press dedicated to promoting and celibrating artists working at the intersection of art, music and technology.</p>
                        
                        <p>Warren is the host of House Poet: A Spoken Word Dance Party and a board member for the Philadelphia literary organization <a src="https://www.bluestoop.org/">Blue Stoop.</a> He has been published in journals including Cartridge Lit, The Cleveland Review of Books, The American Poetry Review. He was featured in the Best American Poetry 2021 selected by Tracey K. Smith. He lives in Philadelphia with his cat Poe.</p>
                        <h4 className="lh-lg">You can find more of Warren's work at <BlockErase><a href="https://www.alongmirewriter.com/">alongmirewriter.com</a></BlockErase></h4>
                    </div>
                </div>
            </div>

            <CollageFrame position={0} horizontal={true} image={images[2]} className="collageFrame"/>
        </div>
    </div>);
}