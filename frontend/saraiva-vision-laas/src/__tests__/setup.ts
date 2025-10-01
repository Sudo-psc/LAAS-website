import '@testing-library/jest-dom';

// Mock do window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock do window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

// Mock do window.open
Object.defineProperty(window, 'open', {
  writable: true,
  value: jest.fn(),
});

// Mock do framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    button: 'button',
    a: 'a',
    section: 'section',
    span: 'span',
  },
}));

// Mock do lucide-react
jest.mock('lucide-react', () => ({
  MessageCircle: () => 'MessageCircle',
  CheckCircle: () => 'CheckCircle',
  Calculator: () => 'Calculator',
  TrendingDown: () => 'TrendingDown',
  Check: () => 'Check',
  Star: () => 'Star',
}));
