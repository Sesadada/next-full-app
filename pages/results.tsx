import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import { mockSearchResultsProps } from '../components/utility/search-results/SearchResults.mocks';
import SearchResults from '../components/utility/search-results/SearchResults';

const Results: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <div className={`flex flex-col space-y-8`}>
        {[...new Array(6)].map((_, idx) => {
          return <SearchResults key={idx} {...mockSearchResultsProps.base} />;
        })}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
