exports.convertToSlug = (Text) => {
  return Text.toLowerCase()
    .replace(/ /g, "_")
    .replace(/[^\w-]+/g, "");
}
