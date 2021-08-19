import React from 'react';
import Document, {
    Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps,
} from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400" rel="stylesheet" />
                </body>
            </Html>
        );
    }
}
