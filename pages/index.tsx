import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';

const posts = [
  { title: 'Test title 1', excerpt: 'First Post Test' },
  { title: 'Test title 2', excerpt: 'Second Post Test' },
];

const Home: NextPage = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Blogio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
