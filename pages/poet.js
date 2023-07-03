import { BlockErase, ContentBlock } from "../styles/styleHome"

export default function poetPage() {
    return(<div>
        <h1>The Poet</h1>
        <div id="content-container" className="d-flex">
            <img className="pr-3 pt-3" width="30%" min-width="600px" src="/images/heather_headshot.jpeg" alt="poet_headshot"/>
            <div className="p-3 display-7">
                <p>Heather Bowlan's work has appeared in the anthology Feminisms in Motion, the journals New Ohio Review, Nashville Review, the Anarchist Review of Books, the Ploughshares blog, and elsewhere. Heather has served as an editor for BOAAT Press and Raleigh Review and as the Operations Coordinator for the 215 Festival. She completed her MFA in Creative Writing at North Carolina State University and has received fellowships from the Virginia Center for the Creative Arts and the Vermont Studio Center.</p>
                <p>In addition to her writing work, Heather is currently working in mixed-media collage, many of which are included in the print version of Highlights and Blackouts. She has recently begun showing my work in Galleries around Philadelphia. Her collages are inspired by the idea of precarious survival, a term coined by anthropologist Anna Lowenhaupt Tsing that challenges capitalist ideas of individual selves. People are enmeshed in our shared histories, and this awareness opens possibilities for community transformation. </p>
                <h4 className="lh-lg">You can find more of Heather's work at <BlockErase><a href="https://www.heatherbowlan.com/">heatherbowlan.com</a></BlockErase></h4>
            </div>
        </div>
    </div>);
}