import { CONFIG } from "../config";

export const getGithubAuth = () => `Bearer ${CONFIG.GITHUB.PAT}`;