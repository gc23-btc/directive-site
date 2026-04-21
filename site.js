const links = {
  siteRepo: "https://github.com/gc23-btc/directive-site",
};

const siteRepoIds = ["site-repo-link", "site-repo-link-hero", "site-repo-link-bottom"];

for (const id of siteRepoIds) {
  const node = document.getElementById(id);
  if (node) {
    node.href = links.siteRepo;
  }
}
