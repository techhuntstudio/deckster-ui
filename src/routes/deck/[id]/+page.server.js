import { saveCard } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    save: async ({ request }) => {
        const data = await request.formData();
        let form_data = data.entries();
        var obj = form_data.next();
        var retrieved = {};
        while (undefined !== obj.value) {
            retrieved[obj.value[0]] = obj.value[1];
            obj = form_data.next();
        }
        const card = await saveCard(retrieved);
        redirect(303, "/");
    }
}