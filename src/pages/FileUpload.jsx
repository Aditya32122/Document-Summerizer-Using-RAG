import React from 'react';

const FileUpload = () => {
  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
      <iframe
        src="https://doctchat.onrender.com/"
        title="Streamlit App"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default FileUpload;
