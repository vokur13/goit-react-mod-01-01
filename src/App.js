import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './json/paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section title="The best of">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
