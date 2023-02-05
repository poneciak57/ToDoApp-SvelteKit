// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type Session from "$auth/interfaces/Session.interface";

// and what to do when importing types
declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			session: Session
		}
		// interface PageData {}
		// interface Platform {}
	}
}
