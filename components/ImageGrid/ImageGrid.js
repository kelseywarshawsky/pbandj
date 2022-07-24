import Masonry from '@mui/lab/Masonry';
import { useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ImageUploader(props) {
  const [mobileView, setMobileView] = useState();
  const { images, deleteImage, pinIt } = props;
  let mql;

  useEffect(() => {
    mql = window.matchMedia('(max-width: 600px)');
    setMobileView(mql.matches);
  }, [window.innerWidth]);

  return (
    <div className="p-7 mx-auto">
      {images && images.length > 0 ? (
        <Masonry columns={mobileView ? 2 : 3} spacing={4} className="mx-auto">
          {images.map((item, index) => (
            <div className="relative" key={index}>
              <img className="mx-auto" src={item.url} alt={item.id} loading="lazy" />
              <CancelIcon
                className="absolute top-1 right-1"
                color="error"
                sx={{ fontSize: 40 }}
                onClick={() => deleteImage(item.id, item.url)}
              />
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
