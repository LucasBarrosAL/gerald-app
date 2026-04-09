import { StatusBar } from 'react-native';
import { Navigation } from './src/stack/RootStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar />
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
