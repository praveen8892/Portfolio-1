import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';

test('renders the hero section heading', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const heroElement = screen.getByRole('heading', { name: /Software Engineer/i });
  expect(heroElement).toBeInTheDocument();
});
