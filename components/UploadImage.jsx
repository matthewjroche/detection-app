import { useState } from 'react';

function UploadImage({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      onFileUpload(file);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button className="btn btn-primary" type="submit">Upload Image</button>
      

    </form>
  );
}

export default UploadImage;
