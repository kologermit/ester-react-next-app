/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
	interface Process {
		env: { [key: string]: string };
	}
}