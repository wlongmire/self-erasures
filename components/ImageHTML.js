import Image from 'next/image'

const ImageHTML = ({image}) => {
    return (image.video) ? 
        <iframe width="500" height="500" src={`${image.src}`} title="YouTube video player" frameborder="0" allow="autoplay;"></iframe>:
        <Image className="sideImage" src={`/images/${image.src}`} width="500" height="500" alt={image.src}/>
}

export default ImageHTML;