import Header from '@/components/Header';

const Home = async () => {
  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'></div>
      </Header>
    </main>
  );
};

export default Home;
