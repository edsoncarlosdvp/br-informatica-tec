import GlobalStyle from "../globals";

const UiProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <>
        <GlobalStyle />
        {children}
    </>
)

export default UiProvider;