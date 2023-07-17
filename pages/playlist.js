import { CollageFrame } from "../styles/styleModules"
import images from '../data/collageUrls.json'
export default function playlistPage() {
    return(<div className="p-md-3 pt-md-5">
        <h1>The Playlist</h1>
        <div className="p-flex flex-column">    
            <p>Every project has a playlist. Song included here were on heavy rotation during 1) the experiences that inspired the poems, 2) the writing of the original poems, and/or 3) the erasure and collaboration process.</p>
            
            <iframe className="py-3" style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/6XmRjbYRbKFdnXyO37Fm07?utm_source=generator" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <CollageFrame position={0} horizontal={true} image={images[0]} className="collageFrame"/>
        </div>
    </div>);
}