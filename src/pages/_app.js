
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import { createTheme } from '../theme/index'
import { store } from '../redux/store'
import ScrollToTop from '../components/scroll-top/ScrollToTop'
import { WrapperForApp } from '../App.style'

import { createEmotionCache } from '../utils/create-emotion-cache';

import Footer from "../components/footer/Footer";
import Navigation from "../components/navbar";
import BottomNav from "../components/navbar/BottomNav";
import '../styles/global.css';

const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
    const queryClient = new QueryClient();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);

    return (
        <CacheProvider value={emotionCache}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <ThemeProvider
                        theme={createTheme({
                            direction: 'rtl',
                            responsiveFontSizes: true,
                            mode: 'light',
                        })}
                    >
                        <CssBaseline />
                        <Toaster />
                        <WrapperForApp>
                        <ScrollToTop />
                        <Navigation />
                        <Component {...pageProps} />
                        <Footer />
				        <BottomNav />
                        {/* {(auth) =>
                            !auth.isInitialized ? (
                                <SplashScreen />
                            ) : (
                                getLayout(<Component {...pageProps} />)
                            )
                            } */}
                            {/* <BrowserRouter>
                                <ScrollToTop />
                                <AllRoutes />
                            </BrowserRouter> */}
                        </WrapperForApp>
                    </ThemeProvider>
                </Provider>
                <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
            </QueryClientProvider>
        </CacheProvider>
    )
}

export default App


