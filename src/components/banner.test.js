import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Banner from './banner';

test('Banner contains the text', () => {
  const theme = createTheme();
  const topBannerImg = 'TrommelbergUtsiktOnna.JPG';
  render(
    <ThemeProvider theme={theme}>
      <Banner bannerImg={topBannerImg} bannerText="BannerTextTest" />
    </ThemeProvider>
  )
  const counterText = screen.getByText(/BannerTextTest/i);
  expect(counterText).not.toBeNull()
  expect(counterText.textContent).toContain("BannerTextTest");
});
