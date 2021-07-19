import ExamplesPanel from '../features/examples/ExamplePanel';
import pictures from '../features/examples/home';
import Page from '../features/Page';

const Home = () => (
  <Page>
    <div className="flex justify-between align-middle">
      <div className="flex items-center container">
        <ExamplesPanel pictures={pictures} />
        <div className="flex flex-col">
          <h1 className="font-semibold">Professional Art</h1>
          <p>
            I am an artist, not a copywriter. Let&apos;s pretend I managed to catch your attention.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default Home;
