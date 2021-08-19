import { render } from '@testing-library/react';
import Home from './Home';

describe('Render HomePage Components', (): void => {
    let component;
    beforeEach(() => {
        component = render(<Home />);
    });

    test('The Title should be visible', (): void => {
        const title = 'Cabin Crew VIP Training';
        const TitleComponent = component.getByText(title);
        expect(TitleComponent).toBeVisible();
    });

    test('The Subtitle should be visible', (): void => {
        const subtitle = 'Tu Centro de Instrucción Aeronáutica';
        const SubtitleComponent = component.getByText(subtitle);
        expect(SubtitleComponent).toBeVisible();
    });

    xtest('The Home Background should be visible', (): void => {
        const urlImage = './assets/home-bg.jpg';
        const SectionTag = component.getByTestId('home-section');
        expect(SectionTag).toHaveStyle(`background-image: url(${urlImage})`);
    });

    test('The "Get Started Button" should be visible', (): void => {
        const titleButton = 'Comenzar';
        const GetStartedButton = component.getByText(titleButton);
        expect(GetStartedButton).toBeVisible();
    });
});
