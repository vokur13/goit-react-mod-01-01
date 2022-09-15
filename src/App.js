import PaintingList from './components/PaintingList';
import paintings from './json/paintings.json';

export default function App() {
  return (
    <div>
      <PaintingList items={paintings} />
    </div>
  );
}
