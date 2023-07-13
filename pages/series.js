import { BlockErase, ContentBlock } from "../styles/styleHome"

export default function seriesPage() {
    return(<div className="p-md-4">
        <div id="content-container" className="d-flex">
            <img className="pr-3" width="20%" min-width="600px" src="https://images.squarespace-cdn.com/content/v1/574f88123c44d86f06c2bc65/1683213528374-B0MBQBHUQ3X09D8AU587/Bowlan+Precarious+Survival+4.jpg?format=1500w" alt="Bowlan+Precarious+Survival+1"/>
            <div className="px-lg-3 display-7">
                <div id="poem" className="py-2">
                    <h1>The Poem Making Process</h1>
                    <div>
                        <ContentBlock className="p-3 m-2">
                            <h5>This project began as a method to reexamine my writing practice by revisiting/revisioning old poems.</h5>
                            <BlockErase className="first-child" link="pointer">It’s also very linked to an idea that I think resonates to most writers and (maybe) poets in particular – that a moment, a feeling, a sensation that changes you, is impossible to express in language. And yet as humans we need language as a framework to try to capture it or ever hope to share it.</BlockErase>
                            <BlockErase link="pointer">My source material for my poetry is made up of the moments that I don’t want to lose. Often not a literal experience, although that’s a starting point. But the feelings that linger, or even the details I wish I could remember and so fill in...</BlockErase>
                            <BlockErase link="pointer">Many of the original poems build up an accumulation of detail, while veering toward and away from narrative. I still have a deep love for maximal writing but these days I’ve also shifted into a different kind of openness, one that makes more room for silence. And so as I made my way back into poetry after a few years away I wanted to revisit this “finished” work and, essentially, un-finish it.</BlockErase>
                            <BlockErase link="pointer">I started by printing out my poems and practicing erasure the old-fashioned way, taking a Sharpie to my work. Then I took the opposite approach and highlighted words and phrases. I did this several times, printing out multiple copies  over a period of months and repeating the highlight/blackout process.</BlockErase>
                            <BlockErase link="pointer">The result has been poems that sometimes resembled their originals, albeit a pared-down version, or that tried to distill that source experience/moment or even turn it on its head.</BlockErase>
                        </ContentBlock>
                    </div>
                </div>

                <div id="colaborations" className="py-2">
                    <h1>Collaborations</h1>
                    <ContentBlock className="p-3 m-2">
                        <h5>Experience always happens within a shared context.</h5>
                        <BlockErase className="first-child" link="pointer">That’s what I kept returning to when I thought about how to share these poems after completing a few cycles of highlights and blackouts.</BlockErase>
                        <BlockErase link="pointer">I wondered about how I could explore and continue to challenge my perspective. And I thought it could be powerful to put these poems alongside other art and add another, non-verbal layer to the experience to bring out the formative emotion or to challenge it.</BlockErase>
                        <BlockErase link="pointer">So I began to reach out to friends, writers, and artists I followed on Instagram. The process, just like with the erasures, was very organic – sometimes I reached out to people based on specific photos or to request photos I remembered from our past. Sometimes I reached out to artists I admired and asked if they would contribute work to present with specific poems.</BlockErase>
                        <BlockErase link="pointer">And sometimes I shared my own photographs and let viewers draw their own conclusions about the connections.</BlockErase>
                        <BlockErase link="pointer">It's been an amazing experience to see these collaborations unfold, to expand my own understanding of what it means to be an artist, to resist the idea of one voice or one perfect poem and instead open the space to openly acknowledge the influence of others.</BlockErase>
                    </ContentBlock>
                </div>
                <div id="tech_design" className="py-2">
                    <h1>Building the Experience</h1>
                    <ContentBlock className="p-3 m-2">
                        <h5>Shifting my perspective about my writing pushed me to reimagine how to share it.</h5>
                        <BlockErase className="first-child" link="pointer">HIGHLIGHTS AND BLACKOUTS began as an almost meditative exercise and my plans to share the results were very informal and spontaneous – primarily through the posts on my Instagram account.</BlockErase>
                        <BlockErase link="pointer">As I started posting, Warren C. Longmire, an accomplished poet, web developer, and dear friend for nearly 20 years, published his first book <a href="https://www.radiatorpress.com/product/open-source-by-warren-c-longmire">Open Source</a>, with a major interactive online element threaded through the poems.</BlockErase>
                        <BlockErase link="pointer">It was a question of right trajectory, right time(s). Warren was curious about exploring the intersection of poetry and technology and its possibilities.</BlockErase>
                        <BlockErase link="pointer">In the spirit of presenting the shift of the poems over time, we began to discuss presenting the poems in a slider – and incorporating the visual and sonic elements that emphasized the transitions. </BlockErase>
                        <BlockErase link="pointer">Over almost two years, the project has evolved, paused, taken up space in our minds and slowly come together as an ecosystem and experience. It came together on its own timeline, framed by the sense of time that comes with a long friendship.</BlockErase>
                        <BlockErase link="pointer">For me, it makes sense that HIGHLIGHTS AND BLACKOUTS begins in an interactive, accessible format – even as it evolves into a book.</BlockErase>
                        <BlockErase link="pointer">Even more, it resonates with the goals of the collection to collaborate with a friend who’s witnessed my growth as a writer and a person for most of my adult life, and vice versa.</BlockErase>
                    </ContentBlock>
                </div>
                <h1 className="py-2">Thank you for exploring and lingering with me!</h1>
            </div>
            
        </div>
    </div>);
}