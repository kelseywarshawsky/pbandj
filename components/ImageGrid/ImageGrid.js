import Masonry from '@mui/lab/Masonry';
import { useEffect, useState } from 'react';

export default function ImageUploader(props) {
  const [mobileView, setMobileView] = useState();

  const images = props.images;
  let mql;

  useEffect(() => {
    mql = window.matchMedia('(max-width: 600px)');
    setMobileView(mql.matches);
  }, [window.innerWidth]);

  // console.log('images:', images);

  return (
    <div className="p-7 mx-auto">
      {images && images.length > 0 ? (
        <Masonry columns={mobileView ? 2 : 3} spacing={4} className="mx-auto">
          {images.map((item, index) => (
            <div>
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
