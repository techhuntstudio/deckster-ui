<script lang='ts'>
	import "../app.css";
	import { AppBar } from '@skeletonlabs/skeleton-svelte'
	import { signOut } from '@auth/sveltekit/client';
	import type { Snippet } from "svelte";
	import { goto } from "$app/navigation";

	type Props = {
		children: Snippet,
		data: {
			session: any
		}
	}
	let { data, children }: Props = $props();
</script>

<svelte:head>
	<title>Deckster {data.env}</title>
</svelte:head>

<AppBar background="bg-gray-950 dark:bg-black">
	{#snippet lead()}
		(icon)
	{/snippet}
	{#snippet children()}
		<strong class="text-xl capitalize text-gray-100 dark:text-white">
			<a 
				href="/"
			>
				Deckster {data.env}
			</a>
		</strong>
	{/snippet}
	{#snippet trail()}
		{#if data.session}
			{#if data.session.user?.image}
				<span
					style="background-image: url('{data.session.user.image}')"
					class="avatar"></span>
			{/if}
			<span class="signedInText">
				<strong class="text-gray-100 dark:text-white">{data.session?.user?.name ?? "User"}</strong>
			</span>
			<!-- <button onclick={() => signOut()} class="btn-sm variant-ghost-surface text-gray-100 dark:text-white">Sign out</button> -->
		{:else}
			<!-- <button class="btn-sm variant-ghost-surface text-gray-100 dark:text-white" onclick={() => goto("/")}>Sign In</button> -->
		{/if}

	{/snippet}
</AppBar>

{@render children()}