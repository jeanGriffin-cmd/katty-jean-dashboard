import Image from 'next/image';

const PhotoGallery = () => {
  const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="relative aspect-square">
          <Image src={photo} alt={`Memory ${index + 1}`} fill className="object-cover rounded" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;