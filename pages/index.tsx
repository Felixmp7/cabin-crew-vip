import NextHead from '../components/Head';
import HomeSection from '../components/Home';
import Courses from '../components/Courses';

const Index = (): JSX.Element => (
    <>
        <NextHead />
        <main>
            <HomeSection />
            <Courses />
        </main>
    </>
);

export default Index;
