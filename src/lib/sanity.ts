import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: 'kxxkzb7n',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2026-01-29',
});
