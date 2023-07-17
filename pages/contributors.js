import contributors from './../data/contributions.json';
import { ContributorContainer }  from './../styles/styleModules'
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

export default function contributorsPage() {
    const [currentContributor, setCurrentContributor] = useState("")
    const { asPath, isReady } = useRouter();

    useEffect(()=> {
        if (isReady) {
            setCurrentContributor(asPath.substring(asPath.indexOf("#") + 1, asPath.length))
        }
    }, [isReady])
    
    return(<div className="px-md-3 pt-md-4">
        <h1>The Contributors</h1>
        <hr/>
        <div id="content-container" className="d-flex">
            <div className="d-flex flex-column pe-md-3">
                <div>
                    <p>Thank you, whoever you are, reading this. I’m grateful that we’ve encountered each other here in this space.</p>
                    <p>Many thanks to the publications where some of these works appeared, often in earlier versions: BlazeVOX, BOAAT, Chicago Quarterly Review, Codex Journal, Gigantic Sequins, Interim, make/shift, Nashville Review, New Ohio Revivew, Sugar House Review, and Walter.</p>
                    <p>Thanks to the wonderful humans who contributed their photos, collages, music, and videos to this project. This group ranges from writers whose work I admire to friends who have known me for 20 years or more and everything in between. Thank you to Cassandra Lopez for your excellent and detailed work digitizing the erasures. And special thanks to Kevin Torigoe for the photos from Hawaii. It’s very special to include images of that time and place in this project.</p>
                    <p>Thanks to my poetry family, the brilliant writers and teachers Sharon McDermott, Dorianne Laux, and Joe Millard, and of course my poetry sister Nancy Reddy. My Pitt and NC State extended poetry family–thank you.</p>
                    <p>My dear chosen family: Luna, Matt, Natalia and the Sydney Street gang, Melinda, Kyle, Melanie, Dante, Andrew, James, Lissie, Jack & Lisa, Dee & Bob, Alex & Hanif, Trent, Becca, Dee, TD, Lenee, Diana, Christine…</p>
                    <p>Warren, thank you for being my friend at first sight all those years ago on a lonely night in London. And for all of our adventures since. And for this amazing collaboration–I’m in awe of your brilliant vision, talent, and energy and how this work together has deepened our friendship.</p>
                    <p>Thank you to my parents for taking my writing seriously, always. Thank you to my sister Emily for your gigantic heart, your music, and for everything you teach me. Thank you forever to Ted and Elliot for our life together and all the expected and unexpected joys. </p>
                </div>

                <img className="d-none-md" width="100%" min-width="100%" src="https://images.squarespace-cdn.com/content/v1/574f88123c44d86f06c2bc65/1683213528374-B0MBQBHUQ3X09D8AU587/Bowlan+Precarious+Survival+4.jpg?format=1500w" alt="Bowlan+Precarious+Survival+1"/>
            </div>
            
            <div>
                {
                    contributors.filter(c => c.blurb).map(contributor => <ContributorContainer key={`${contributor.first}-${contributor.last}`} id={`${contributor.first}-${contributor.last}`}>
                        <div className={`contributorInfo ${(currentContributor === `${contributor.first}-${contributor.last}`) && "active"}`}>
                            <h2>{contributor.first} {contributor.last}</h2>
                            <p>{contributor.blurb}</p>
                            
                            {contributor.insta && <>
                                <p>Instagram: <a href={`https://www.instagram.com/${contributor.insta}`}> @{contributor.insta}</a></p>
                            </>}
                            {contributor.twitter && <>
                                <p>Twitter: <a href={`https://twitter.com/${contributor.twitter}`}> @{contributor.twitter}</a></p>
                            </>}
                            {contributor.website && <>
                                <p>Website: <a href={contributor.website.url}> {contributor.website.title}</a></p>
                            </>}
                        </div>
                    </ContributorContainer>)
                }
            </div>
            
        </div>
    </div>);
}