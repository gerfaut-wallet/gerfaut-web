const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** A command as markup for a block whose lines wrap: every word in a
    span of its own (`.code-word`), which moves to the next line whole
    rather than break after the dash of an option such as
    --ignore-missing. A word wider than the block, the public key,
    still breaks inside. The spaces are kept as they are, so the text
    of the block is the command, character for character. */
export function codeWords(command: string): string {
  return command
    .split(" ")
    .map((word) => (word ? `<span class="code-word">${escape(word)}</span>` : ""))
    .join(" ");
}
