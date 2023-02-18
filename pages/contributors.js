import contributors from './../data/contributions.json';
import { ContributorContainer }  from './../styles/styleModules'

export default function contributorsPage() {
    return(<div>
        <h1>The Contributors</h1>
        <p>This project would be impossible with the generous contributions of the following artists.</p>
        <hr/>
        {
            contributors.map(contributor => <ContributorContainer id={`${contributor.first}-${contributor.last}`}>

                <img src="https://source.unsplash.com/WLUHO9A_xik/200x200"/>
                <div className="contributorInfo">
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
    </div>);
}