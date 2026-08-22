const shopifyHandlePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function buildProductInquiryHref(handle: string) {
  return `/contact?product=${encodeURIComponent(handle)}`;
}

export function parseProductHandle(value: string | string[] | undefined) {
  if (typeof value !== "string" || !shopifyHandlePattern.test(value)) {
    return null;
  }

  return value;
}
