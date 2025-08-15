import { UserCardElement } from './webcomponent';

// Define once so consumers can include your bundle multiple times safely
if (!customElements.get('user-card')) {
  customElements.define('user-card', UserCardElement);
}

// (optional) export React component for direct imports by other build systems
export { default as UserCard } from './components/UserCard';
