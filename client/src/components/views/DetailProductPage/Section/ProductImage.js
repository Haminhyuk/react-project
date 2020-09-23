import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {

        if (props.detail.images && props.detail.images.length > 0) {
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)

        }
        //props.detail 값이 바뀔때마다 라이프사이클을 한번 더 실행시켜준다
    }, [props.detail])


    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
