import Header from '../component/Header';
import BackgroundDiv from '../component/BackgroundDiv';
import HomeTitle from '../component/HomeTitle';
import Footer from '../component/Footer';
import MovieAPI from '../component/MovieAPI';

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundDiv>
        <HomeTitle/>
      </BackgroundDiv>
      <MovieAPI />
      <Footer />
    </>
  )
}