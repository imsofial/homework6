// src/pages/works.tsx

import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { ComicData } from '../components/types';
import ComicDisplay from '../components/ComicDisplay';
import Works from '../components/Works';
import ComicFetcher from '../components/ComicFetcher';
import Layout from '../components/Layout';

interface Props {
  initialComicData: ComicData | null;
}

const WorksPage: React.FC<Props> = ({ initialComicData }) => {
  const [comicData, setComicData] = useState<ComicData | null>(
    initialComicData
  );

  return (
    <>
      <Layout>
        <Works />
        <ComicFetcher setComicData={setComicData} />
        {comicData && <ComicDisplay comicData={comicData} />}
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialComicData: ComicData | null = null;

  return {
    props: {
      initialComicData,
    },
  };
};

export default WorksPage;
