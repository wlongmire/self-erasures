import Image from 'next/image'
import ImageHTML from './ImageHTML'

import contributions from './../data/contributions';

const ImageHandler = ({image}) => {
    const getContributorLink = (contributorId, type) => {
        if (contributorId) {
            const {first, last} = contributions[contributorId]
            return <p className="image_contributor"><a href={`/contributors#${first}-${last}`}>{type} By {first} {last}</a></p>
        } else {
            return <p className="image_contributor"><a href={`/poet`}>{type} By Heather Bowlan</a></p>
        }
        
    }
    
    if (!image) {
        return <>
             <Image className="sideImage" src={`/images/paper_background.jpeg`} width="500" height="500" alt={"image"}/>
        </>
    } else if (image.length === 1) {
        return <>
            <ImageHTML image={image[0]}/>
            <span>{getContributorLink(image[0].contributor, "Image")}</span>
        </>
    } else {
        return <Carousel dotPosition="right" className="imageCarousel" autoplay="true" draggable autoplaySpeed={5000} effect="fade">
            {
                image.map(i => <div>
                    <ImageHTML image={i}/>
                    {
                        <span>{getContributorLink(i.contributor, "Image")}</span>
                    }
                </div>)
            }
        </Carousel>   
    }
}

export default ImageHandler