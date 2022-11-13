import contributors from './data/contributions';

export default function contributorsPage() {
    return(<div>
        <h1>The Contributors</h1>
        <p>This project would be impossible with the generous contributions of the following artists.</p>
        
            {
                contributors.map(contributor => <div id={`${contributor.first}-${contributor.last}`}>
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
                </div>)
            }
    </div>);
}