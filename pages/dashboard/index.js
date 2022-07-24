import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';

export default function Dashboard() {
  return (
    <div>
      <br />
      <ImageUploader />
      <ImageGrid
        // images={[]}
        images={[
          '/images/jelly.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg'
        ]}
      />
    </div>
  );
}
