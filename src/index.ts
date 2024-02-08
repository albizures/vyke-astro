export { config } from './config'

// @ts-expect-error component is untyped unless loaded by language tools
export { default as Page404 } from './components/404.astro'
// @ts-expect-error component is untyped unless loaded by language tools
export { default as Footer } from './components/footer.astro'
// @ts-expect-error component is untyped unless loaded by language tools
export { default as IconLinks } from './components/icon-links.astro'
// @ts-expect-error component is untyped unless loaded by language tools
export { default as Header } from './components/header.astro'
export {
	/**
	 * @deprecated
	 */
	default as ThemeController,
	// @ts-expect-error component is untyped unless loaded by language tools
} from './components/theme-controller.astro'
// @ts-expect-error component is untyped unless loaded by language tools
export { default as Section } from './components/section.astro'
// @ts-expect-error component is untyped unless loaded by language tools
export { default as ThemeToggle } from './components/theme-toggle.astro'
// @ts-expect-error component is untyped unless loaded by language tools
export { default as Theme } from './components/theme.astro'
