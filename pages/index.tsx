import ExamplesPanel from '../features/examples/ExamplePanel';
import pictures from '../features/examples/home';
import Title from '../features/Title';
import Page from '../features/Page';

const Home = () => (
  <Page>
    <div className="flex container items-center justify-between flex-col xl:flex-row h-full">
      <ExamplesPanel pictures={pictures} />
      <div className="flex flex-col items-center xl:items-end">
        <div className="flex flex-col w-10/12">
          <Title>Professional Art</Title>
          <p className="text-lg leading-loose sm:text-2xl sm:leading-loose text-center xl:text-left">
            I am an artist, not a copywriter. Let&apos;s pretend I managed to catch your attention.
          </p>
        </div>
      </div>
    </div>
  </Page>
);

export default Home;
