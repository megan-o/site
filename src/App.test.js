import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { normalizeRows, formatDate, safeUrl } from './portfolioUtils';

beforeEach(() => {
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY = 'test-key';
  global.fetch = jest.fn().mockRejectedValue(new Error('Offline'));
});
afterEach(() => jest.restoreAllMocks());

test('restores original tabs and keeps all updated work visible offline', async () => {
  render(<App />);
  await act(async () => {});
  expect(screen.getByRole('tab', { name: "What's New" })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('link', { name: 'The Role of Social in Movie Discovery' })).toBeInTheDocument();
  expect(document.querySelectorAll('.list-group-item')).toHaveLength(14);
  fireEvent.click(screen.getByRole('tab', { name: 'Resume' }));
  expect(screen.getByTitle('Megan O’Brien Resume')).toHaveAttribute('src', '/Megan-OBrien-Resume.pdf');
  fireEvent.click(screen.getByRole('tab', { name: 'About' }));
  expect(screen.getByText(/Currently Associate Director/)).toBeInTheDocument();
});

test('loads new entries from the live spreadsheet in the original list', async () => {
  global.fetch.mockResolvedValue({ ok: true, json: async () => ({ values: [['Name', 'Link', 'Description', 'Category', 'Date'], ['New study', 'https://example.com/study', 'A new publication.', 'Research', '09/30/2026']] }) });
  render(<App />);
  await waitFor(() => expect(screen.getByRole('link', { name: 'New study' })).toBeInTheDocument());
  expect(document.querySelectorAll('.list-group-item')).toHaveLength(1);
});

test('rejects malformed feeds and unsafe links and preserves partial dates', () => {
  expect(() => normalizeRows(undefined)).toThrow();
  expect(() => normalizeRows([['error'], ['denied']])).toThrow();
  expect(safeUrl('javascript:alert(1)')).toBeNull();
  expect(formatDate('2026')).toBe('2026');
  expect(formatDate('2024-01')).toBe('Jan 2024');
  expect(formatDate('03/03/2026')).toBe('Mar 2026');
});
