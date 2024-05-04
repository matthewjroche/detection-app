// components/ImageUploader.js
import { useState } from 'react';

const ImageUploader = () => {
    const [imageSrc, setImageSrc] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImageSrc(e.target.result);
            // Optionally, here you can also call a function to make predictions
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {imageSrc && <img src={imageSrc} alt="Uploaded" width="224" height="224" />}
        </div>
    );
};

export default ImageUploader;
