import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';



function Cropper() {
    const [fileSrc, setFile] = useState(null)

    const handleFileChange = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    const [image, setImage] = useState(null)

    const [crop, setCrop] = useState({ aspect: 16 / 9 });


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <input type={'file'} accept='image/*' onChange={handleFileChange} />
                </div>
                {
                    fileSrc && <div className='col-md-6'>

                        <ReactCrop onImageLoaded={setImage} crop={crop} onChange={c => setCrop(c)}>
                            <img src={fileSrc} />
                        </ReactCrop>
                        <button className='btn btn-info'>Crop</button>

                    </div>
                }

            </div>
        </div>
    )
}

export default Cropper