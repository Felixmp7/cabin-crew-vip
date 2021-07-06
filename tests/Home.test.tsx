import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Render HomePage Components', (): void => {
    let pageObject;
    beforeEach(() => {
        pageObject = render(<Home />);
    });

    test('The Title should be visible', (): void => {
        const title = 'Cabin Crew VIP Training';
        const TitleComponent = pageObject.getByText(title);
        expect(TitleComponent).toBeVisible();
    });

    test('The Subtitle should be visible', (): void => {
        const subtitle = 'Tu Centro de Instrucción Aeronáutica';
        const SubtitleComponent = pageObject.getByText(subtitle);
        expect(SubtitleComponent).toBeVisible();
    });

    test('The "Get Started Button" should be visible', (): void => {
        const titleButton = 'Comenzar';
        const GetStartedButton = pageObject.getByText(titleButton);
        expect(GetStartedButton).toBeVisible();
    });
});
