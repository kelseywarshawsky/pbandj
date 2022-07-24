import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

export default function ImageUploader(props) {
  const images = props.images;

  console.log('images:', images);

  return (
    <div className="p-7">
      {images && images.length > 0 ? (
        <Box sx={{ width: 500, minHeight: 829 }}>
          <Masonry columns={3} spacing={2}>
            {images.map((item, index) => (
              <div key={index}>
                <img className="w-36 h-auto" src={item} alt={item} loading="lazy" />
              </div>
            ))}
          </Masonry>
        </Box>
      ) : (
        <div>
          <p>Start Creating NFTs</p>
        </div>
      )}
    </div>
  );
}
