import Layout from '../app/layout';
import Overview from '../app/components/Overview';
import Stocks from '../app/components/Stocks';
import Watchlist from '../app/components/Watchlist';
import Subscriptions from '../app/components/Subscriptions';

const Home = () => {
  return (
    <Layout>
      <Overview />
      <Stocks />
      <Watchlist />
      <Subscriptions />
    </Layout>
  );
};

export default Home;
