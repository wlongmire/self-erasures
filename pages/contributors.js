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
    
    return(<div className="px-3">
        <h1>The Contributors</h1>
        <div id="content-container" className="d-flex">
            <div>
                
                <hr/>
                {
                    contributors.map(contributor => <ContributorContainer id={`${contributor.first}-${contributor.last}`}>
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