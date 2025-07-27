export default {
  fetch(request: Request) {
    // Handle SPA routing - serve index.html for all routes
    const url = new URL(request.url);
    
    // If it's an API request, handle accordingly
    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ message: 'API not implemented' }), {
        status: 501,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // For all other requests, return 404 for now
    // In production, this would serve the SPA assets
    return new Response("Not Found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
