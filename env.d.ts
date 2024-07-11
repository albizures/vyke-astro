/// <reference types="astro/client" />
declare module '*.astro' {
	import type { AstroComponent } from 'astro/client'

	const component: AstroComponent
	export default component
}
