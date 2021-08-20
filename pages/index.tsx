import Courses from '@components/Courses';
import NextHead from '@components/Head';
import Home from '@components/Home';
import Team from '@components/Team';

const Index = (): JSX.Element => (
    <>
        <NextHead />
        <main>
            <Home />
            <Courses />
            <Team />
        </main>
    </>
);

export default Index;
