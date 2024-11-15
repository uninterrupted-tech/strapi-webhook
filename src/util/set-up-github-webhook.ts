import type { Core } from "@strapi/strapi";
import { getGithubAuth } from "./get-github-auth";
import { CONFIG } from "../config";

const name = "GitHub Action";

/**
 * In order to trigger a workflow in GitHub Actions it's needed to make POST request go GitHub API with `event_type` in body.
 * However, Strapi webhook API does not allow to set body.
 * Therefore, proxy endpoint (`/api/github`) has been created.
 * The proxy endpoint prepares and executes the request to GitHub by moving `event_type` from query param to body.
 *
 * Refs:
 * - https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#create-a-repository-dispatch-event
 * - https://docs.strapi.io/dev-docs/backend-customization/webhooks
 */
export const setUpGithubWebhook = async (strapi: Core.Strapi) => {
  const webhookStore = await strapi.get("webhookStore");

  try {
    const webhooks = await webhookStore.findWebhooks();
    const oldWebhook = webhooks.find((webhook) => webhook.name === name);
    if (oldWebhook) {
      console.log(`Removing old ${oldWebhook.name} webhook...`);
      await webhookStore.deleteWebhook(oldWebhook.id);
      console.log(`Old ${oldWebhook.name} webhook removed.`);
    } else {
      console.log(`${name} does not exist yet.`);
    }
  } catch (error) {
    console.error(`Unable to prepare "${name}" webhook`, error);
  }

  try {
    await webhookStore.createWebhook({
      id: "", // Strapi ignores it and uses auto-increment values
      events: [], // Webhook will be triggered manually
      headers: {
        "x-authorization": getGithubAuth(),
      },
      isEnabled: true,
      name,
      url: `http://localhost:${CONFIG.PORT}/api/github?event_type=${CONFIG.GITHUB.EVENT_TYPE}`,
    });
    console.log(`${name} webhook created.`);
  } catch (error) {
    console.error(`Unable to create "${name}" webhook`, error);
  }
};
