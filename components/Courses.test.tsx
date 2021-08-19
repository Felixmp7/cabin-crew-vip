import { render } from '@testing-library/react';
import Courses from './Courses';

describe('Render Courses Component', (): void => {
    let component;
    beforeEach(() => {
        component = render(<Courses />);
    });

    test('The Title should be visible', (): void => {
        const title = 'Te ofrecemos cursos';
        const TitleTag = component.getByText(title);
        expect(TitleTag).toBeVisible();
    });

    test('The Subtitle should be visible', (): void => {
        const subtitle = 'Para la formación de profesionales y técnicos del medio Aeronáutico';
        const SubtitleTag = component.getByText(subtitle);
        expect(SubtitleTag).toBeVisible();
    });

    test('The Courses Info should be visible', (): void => {
        const content = 'Te brindaremos una guía direccional, adaptable a las circunstancias del momento, para alcanzar los fines y objetivos de la Empresa.';
        const InfoTag = component.getByText(content);
        expect(InfoTag).toBeVisible();
    });

    xtest('Courses image should be visible', (): void => {
        const altText = 'Cursos';
        const Image = component.getByAltText(altText);
        expect(Image).toBeVisible();
    });

    test('More Info Button should be visible', (): void => {
        const titleButton = 'Más info';
        const Button = component.getByText(titleButton);
        expect(Button).toBeVisible();
    });
});
