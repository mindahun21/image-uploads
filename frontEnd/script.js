document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const imageInput = document.getElementById('image');
  const previewContainer = document.getElementById('previewContainer');

  // Handle form submission
  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!imageInput.files.length) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageInput.files[0]);

    try {
      const response = await fetch('http://127.0.0.1:8000/upload-image/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Image uploaded successfully!');
        displayImage(data.image_url); 
      } else {
        alert('Failed to upload image. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  });

  
  function displayImage(imageUrl) {
    const img = document.createElement('img');
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank';
    link.textContent = 'View Image In Cloudinary';

    img.src = imageUrl;
    img.alt = 'Uploaded image preview';

    previewContainer.innerHTML = '';
    previewContainer.appendChild(img);
    previewContainer.appendChild(link);
  }
});
