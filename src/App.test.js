import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { normalizeRows, formatDate, safeUrl } from './portfolioUtils';

beforeEach(() => {
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY = 'test-key';
  global.fetch = jest.fn().mockRejectedValue(new Error('Offline'));
});
afterEach(() => jest.restoreAllMocks());

test('keeps published work visible when Google Sheets fails and filters categories', async () => {
  render(<App />);
  await act(async () => {});
  expect(screen.getByRole('link', { name: 'The Role of Social in Movie Discovery' })).toBeInTheDocument();
  expect(document.querySelectorAll('.work-card')).toHaveLength(6);
  fireEvent.click(screen.getByRole('button', { name: 'Explore all 14 entries' }));
  expect(document.querySelectorAll('.work-card')).toHaveLength(14);
  fireEvent.click(screen.getByRole('button', { name: 'Research', exact: true }));
  expect(document.querySelectorAll('.work-card')).toHaveLength(5);
  expect(screen.queryByRole('link', { name: 'Academic–Industry Nexus' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Speaking', exact: true }));
  expect(screen.getByRole('link', { name: 'Academic–Industry Nexus' })).toBeInTheDocument();
  expect(document.querySelectorAll('.work-card')).toHaveLength(6);
  fireEvent.click(screen.getByRole('button', { name: 'Recognition', exact: true }));
  expect(document.querySelectorAll('.work-card')).toHaveLength(3);
});

test('loads new entries from the live spreadsheet without losing category controls', async () => {
  global.fetch.mockResolvedValue({ ok: true, json: async () => ({ values: [['Name', 'Link', 'Description', 'Category', 'Date'], ['New study', 'https://example.com/study', 'A new publication.', 'Research', '09/30/2026']] }) });
  render(<App />);
  await waitFor(() => expect(screen.getByRole('link', { name: 'New study' })).toBeInTheDocument());
  expect(document.querySelectorAll('.work-card')).toHaveLength(1);
});

test('rejects malformed feeds and unsafe links and preserves partial dates', () => {
  expect(() => normalizeRows(undefined)).toThrow();
  expect(() => normalizeRows([['error'], ['denied']])).toThrow();
  expect(safeUrl('javascript:alert(1)')).toBeNull();
  expect(formatDate('2026')).toBe('2026');
  expect(formatDate('2024-01')).toBe('Jan 2024');
  expect(formatDate('03/03/2026')).toBe('Mar 2026');
});

test('mobile navigation is keyboard accessible and closes after a selection', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
  expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'About', exact: true }));
  expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('link', { name: /View full resume/ })).toHaveAttribute('href', '/Megan-OBrien-Resume.pdf');
});
