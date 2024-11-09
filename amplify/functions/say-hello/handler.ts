export const handler = async (event: any) => {
  const name = event.arguments.name || 'World';
  return `Hello, ${name}!`;
}; 