<div align="center">
	<h1>
		@vyke/astro
	</h1>
</div>

Sets of components and helpers for vyke apps made with astro

## Components
### Theme
```astro
---
import { Theme } from '@vyke/astro';
---
<html lang="en">
	<head>
		<Theme />
	</head>
	<body>
		<!-- Your content here -->
	</body>
</html>
```

### ThemeToggle
```astro
---
import { ThemeToggle } from '@vyke/astro';
---

<ThemeToggle slot="right">
	<span slot="light">Light</span>
	<span slot="dark">Dark</span>
</ThemeToggle>
```

### Footer

```astro
---
import { Footer } from '@vyke/astro';
---

<Footer
	openSourceLinks={[
		{
			href: 'https://github.com/albizures/vyke-results',
			label: '@vyke/results',
		},
	]}
	projectLinks={[{ href: 'https://clock.vyke.dev', label: 'Online Clock' }]}
	otherLinks={[{ href: '/legal', label: 'legal' }]}
>
	<span slot="github-icon">|github|</span>
	<span slot="twitter-icon">|twitter|</span>
</Footer>
```

### IconLisks

```astro
---
import { IconLinks } from '@vyke/astro';
---

<IconLinks />
```

### Page404

```astro
---
import { Page404 } from '@vyke/astro';
---

<Page404 />
```

## Projects using it

- [Flowmodoro App](https://flowmodoro.vyke.dev)
- [Online Clock](https://clock.vyke.dev)
