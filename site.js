const links = {
  appRepo: "https://github.com/gc23-btc/directive-desktop",
  siteRepo: "#",
  download: "https://github.com/gc23-btc/directive-desktop/releases/download/v0.1.0/Directive-0.1.0-arm64-mac.zip",
  preview: "#",
};

const appRepoIds = ["app-repo-link", "app-repo-link-bottom"];
const downloadIds = ["download-link", "download-link-bottom"];

for (const id of appRepoIds) {
  const node = document.getElementById(id);
  if (node) {
    node.href = links.appRepo;
  }
}

for (const id of downloadIds) {
  const node = document.getElementById(id);
  if (node) {
    node.href = links.download;
  }
}

const siteRepoLink = document.getElementById("site-repo-link");
if (siteRepoLink) {
  siteRepoLink.href = links.siteRepo;
}

const sitePreviewLink = document.getElementById("site-preview-link");
if (sitePreviewLink) {
  sitePreviewLink.href = links.preview;
}
