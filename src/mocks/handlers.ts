import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock API endpoints for lessons
  http.post('/api/users', async ({ request }) => {
    const user = await request.json();
    return HttpResponse.json({
      id: Math.random().toString(36).substr(2, 9),
      ...user,
      createdAt: new Date().toISOString(),
    });
  }),

  http.post('/api/contact', async ({ request }) => {
    const data = await request.json();
    return HttpResponse.json({
      message: 'Contact form submitted successfully',
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    });
  }),

  http.post('/api/validate-email', async ({ request }) => {
    const { email } = (await request.json()) as { email: string };

    // Simulate server-side validation
    if (email === 'taken@example.com') {
      return HttpResponse.json({ available: false }, { status: 400 });
    }

    return HttpResponse.json({ available: true });
  }),
];
