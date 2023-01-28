import { CompA } from './components/CompA';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return <ErrorBoundary>
    <CompA />
  </ErrorBoundary>
}

export default App;
