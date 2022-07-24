import Masonry from '@mui/lab/Masonry';

export default function ImageUploader(props) {
  const images = props.images;

  console.log('images:', images);

  return (
    <div className="p-7 mx-auto">
      {images && images.length > 0 ? (
        <Masonry columns={3} spacing={2} className="mx-auto">
          {images.map((item, index) => (
            <div key={index}>
              <img className="mx-auto" src={item} alt={item} loading="lazy" />
            </div>
          ))}
        </Masonry>
      ) : (
        <div className="flex flex-col items-center justify-items-center">
          <p className="text-center">Create Some NFTs.. You'll See Them Here!</p>
        </div>
      )}
    </div>
  );
}
