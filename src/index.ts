export { config } from './config'

export { default as Page404 } from './components/404.astro'
export { default as Footer } from './components/footer.astro'
export { default as FooterWithLinks } from './components/footer-with-links.astro'
export { default as IconLinks } from './components/icon-links.astro'
export { default as Header } from './components/header.astro'
export {
	/**
	 * @deprecated
	 */
	default as ThemeController,

} from './components/theme-controller.astro'
export { default as Section } from './components/section.astro'
export { default as ThemeToggle } from './components/theme-toggle.astro'
export { default as Theme } from './components/theme.astro'

export {
	type SiteConfig,
} from './site'
export {
	type Link,
} from './link'
