import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import UserCard, { UserCardProps } from './components/UserCard';

// Import Tailwind styles as string using ?inline
// This works without vite-plugin-string
// @ts-ignore
import tailwindCss from './styles.css?inline';

function toProps(el: HTMLElement): UserCardProps {
  const get = (k: string) => el.getAttribute(k) ?? undefined;
  const themeAttr = (el.getAttribute('theme') as 'light' | 'dark') || 'light';
  return {
    name: get('name'),
    email: get('email'),
    phone: get('phone'),
    location: get('location'),
    avatar: get('avatar'),
    title: get('title'),
    theme: themeAttr,
  };
}

function sheetFromText(cssText: string): CSSStyleSheet | null {
  try {
    const sheet = new CSSStyleSheet();
    // @ts-ignore
    sheet.replaceSync(cssText);
    return sheet;
  } catch {
    return null;
  }
}

export class UserCardElement extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'email', 'phone', 'location', 'avatar', 'title', 'theme'];
  }

  private root: Root | null = null;
  private mount: HTMLDivElement | null = null;
  private shadow!: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    const sheet = sheetFromText(tailwindCss);
    if (sheet && 'adoptedStyleSheets' in Document.prototype) {
      // @ts-ignore
      this.shadow.adoptedStyleSheets = [
        ...this.shadow.adoptedStyleSheets,
        sheet,
      ];
    } else {
      const styleEl = document.createElement('style');
      styleEl.textContent = tailwindCss;
      this.shadow.appendChild(styleEl);
    }

    this.mount = document.createElement('div');
    this.shadow.appendChild(this.mount);
  }

  connectedCallback() {
    if (!this.mount) return;
    this.root = createRoot(this.mount);
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  attributeChangedCallback() {
    if (this.root) this.render();
  }

  private render() {
    if (!this.root) return;
    const props = toProps(this);
    this.root.render(<UserCard {...props} />);
  }
}
